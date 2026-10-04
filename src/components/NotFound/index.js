import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'

const NotFound = () => (
  <>
    <div className="container not-found-page">
      <div className="not-found-mark" aria-hidden="true">404</div>
      <div className="not-found-content">
        <span className="not-found-kicker">Page not found</span>
        <h1>This route doesn’t exist.</h1>
        <p>The page may have moved, or the address may be incorrect. You can return to the portfolio and continue from there.</p>
        <Link to="/" className="not-found-link">Back to home</Link>
      </div>
    </div>
    <Loader type="pacman" />
  </>
)

export default NotFound
