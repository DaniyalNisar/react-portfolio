// Render complete HTML for crawlers, link previews, and visitors without JavaScript.
const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')
const original = require.extensions['.js']
require.extensions['.scss'] = () => {}
require.extensions['.js'] = (module, filename) => {
  if (!filename.startsWith(path.resolve('src') + path.sep))
    return original(module, filename)
  const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename,
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
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
const template = fs.readFileSync('build/index.html', 'utf8')
const origin = 'https://daniyalnisar.netlify.app'
const { metadata } = require('./src/App')
const pages = [
  ...Object.entries(metadata),
  ...articles.map((a) => [
    `/blog/${a.id}`,
    [
      `${a.title} | Daniyal Nisar Rana`,
      `Engineering notes by Daniyal Nisar Rana: ${a.title}`,
    ],
  ]),
]
const escape = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
for (const [route, [title, description]] of [
  ...pages,
  [
    '/404',
    ['Page not found | Daniyal Nisar Rana', 'This page could not be found.'],
  ],
]) {
  const markup = renderToString(
    React.createElement(
      StaticRouter,
      { location: route },
      React.createElement(App)
    )
  )
  let html = template
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(
      /(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g,
      `$1${escape(description)}`
    )
    .replace(
      /(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g,
      `$1${escape(title)}`
    )
    .replace(
      /(<link rel="canonical" href=")[^"]*/,
      `$1${origin}${route === '/' ? '/' : route}`
    )
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${origin}${route}`)
  if (route === '/404')
    html = html.replace(
      '</head>',
      '<meta name="robots" content="noindex"/></head>'
    )
  const file =
    route === '/404'
      ? 'build/404.html'
      : path.join('build', route, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
}
fs.writeFileSync(
  'build/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(([route]) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')}\n</urlset>\n`
)
console.log(`Prerendered ${pages.length} pages and a 404 page.`)
