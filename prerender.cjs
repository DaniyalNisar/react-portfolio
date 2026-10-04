// Render complete HTML for crawlers, link previews, and visitors without JavaScript.
const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')
const original = require.extensions['.js']

require.extensions['.scss'] = require.extensions['.css'] = () => {}

const assetManifest = JSON.parse(fs.readFileSync('build/asset-manifest.json', 'utf8'))
const assetFiles = assetManifest.files || {}
const mimeTypes = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
}

for (const [ext, mime] of Object.entries(mimeTypes)) {
  require.extensions[ext] = (module, filename) => {
    const manifestKey = Object.keys(assetFiles).find(
      (key) => key.startsWith('static/media/') && key.includes(path.basename(filename, ext))
    )
    const url = manifestKey
      ? assetFiles[manifestKey]
      : `data:${mime};base64,${fs.readFileSync(filename).toString('base64')}`
    module.exports = { __esModule: true, default: url }
  }
}

require.extensions['.js'] = (module, filename) => {
  if (!filename.startsWith(path.resolve('src') + path.sep)) return original(module, filename)

  const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename,
    presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
    babelrc: false,
    configFile: false,
  })
  module._compile(code, filename)
}

const React = require('react')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router-dom/server')
const App = require('./src/App').default
const { articles } = require('./src/articles')
const { metadata } = require('./src/App')
const template = fs.readFileSync('build/index.html', 'utf8')

const origin = (process.env.SITE_ORIGIN || 'https://daniyalnisar.github.io/react-portfolio').replace(/\/$/, '')
const basePath = (process.env.PUBLIC_URL || '').replace(/\/$/, '')
const personId = `${origin}/#person`
const articleByRoute = Object.fromEntries(articles.map((article) => [`/blog/${article.id}`, article]))

const pages = [
  ...Object.entries(metadata),
  ...articles.map((article) => [
    `/blog/${article.id}`,
    [`${article.title} | Daniyal Nisar Rana`, article.description],
  ]),
]

const escape = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

const addJsonLd = (html, schema) => {
  return html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(schema)}</script></head>`)
}

for (const [route, [title, description]] of [
  ...pages,
  ['/404', ['Page not found | Daniyal Nisar Rana', 'This page could not be found.']],
]) {
  const location = `${basePath}${route === '/' ? '/' : route}` || '/'
  const markup = renderToString(
    React.createElement(
      StaticRouter,
      { location, basename: basePath || undefined },
      React.createElement(App)
    )
  )

  const canonical = `${origin}${route === '/' ? '/' : route}`
  const article = articleByRoute[route]

  let html = template
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, `$1${escape(description)}`)
    .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g, `$1${escape(title)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${canonical}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${canonical}`)

  if (route === '/about') {
    const profileSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${canonical}#profile`,
      url: canonical,
      name: 'About Daniyal Nisar Rana',
      mainEntity: {
        '@type': 'Person',
        '@id': personId,
        name: 'Daniyal Nisar Rana',
        url: `${origin}/`,
        jobTitle: 'Software Engineer',
        sameAs: [
          'https://www.linkedin.com/in/daniyal-nisar99/',
          'https://github.com/DaniyalNisar',
        ],
        knowsAbout: [
          'Java',
          'Spring Boot',
          'Backend Engineering',
          'Fintech',
          'Payment Systems',
          'ISO 8583',
          'Performance Engineering',
          'Artificial Intelligence',
          'Machine Learning',
        ],
      },
    }
    html = addJsonLd(html, profileSchema)
  }

  if (route === '/mywork') {
    const workSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${canonical}#work`,
      url: canonical,
      name: 'Engineering Work by Daniyal Nisar Rana',
      description,
      author: { '@id': personId },
      about: [
        'Backend Engineering',
        'Payment Systems',
        'Performance Engineering',
        'Reliability Engineering',
        'Web Applications',
      ],
    }
    html = addJsonLd(html, workSchema)
  }

  if (route === '/blogs') {
    const blogListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Engineering Notes by Daniyal Nisar Rana',
      itemListElement: articles.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${origin}/blog/${item.id}`,
        name: item.title,
      })),
    }
    html = addJsonLd(html, blogListSchema)
  }

  if (article) {
    const imageUrl = `${origin}${article.image}`
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.datePublished,
      author: { '@type': 'Person', '@id': personId, name: 'Daniyal Nisar Rana', url: `${origin}/` },
      publisher: { '@type': 'Person', '@id': personId, name: 'Daniyal Nisar Rana', url: `${origin}/` },
      mainEntityOfPage: canonical,
      image: imageUrl,
    }
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${origin}/blogs` },
        { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
      ],
    }

    html = html
      .replace('<meta property="og:type" content="website" />', '<meta property="og:type" content="article" />')
      .replace(/(<meta property="og:image" content=")[^"]*/, `$1${imageUrl}`)
      .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${imageUrl}`)

    html = addJsonLd(html, articleSchema)
    html = addJsonLd(html, breadcrumbSchema)
  }

  if (route === '/404') {
    html = html.replace('</head>', '<meta name="robots" content="noindex"/></head>')
  }

  const file = route === '/404' ? 'build/404.html' : path.join('build', route, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
}

const sitemapEntries = pages.map(([route]) => {
  const article = articleByRoute[route]
  const loc = `${origin}${route === '/' ? '/' : route}`
  const lastmod = article?.datePublished ? `<lastmod>${article.datePublished}</lastmod>` : ''
  return `  <url><loc>${loc}</loc>${lastmod}</url>`
})

fs.writeFileSync(
  'build/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`
)

fs.writeFileSync('build/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)

console.log(`Prerendered ${pages.length} pages and a 404 page for ${origin}.`)
