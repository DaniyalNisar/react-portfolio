# Daniyal Nisar Rana portfolio

React portfolio with a responsive black and blue design. The production build prerenders public routes so page content and metadata are available without JavaScript.

## Development

Use Node 22, then run `npm ci` and `npm start`.

## Build

Run `npm run build`. Deploy the generated `build` directory. Netlify configuration is in `netlify.toml`.

The prerender step creates route HTML, the sitemap, and a 404 page. Keep route metadata in `src/App.js` and published articles in `src/articles.js`.

The contact form uses the existing Web3Forms endpoint. Do not send a test message without the site owner's authorization. Google Analytics and Search Console verification are preserved.
