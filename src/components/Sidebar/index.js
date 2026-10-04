import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/mywork', 'Work'],
  ['/blogs', 'Writing'],
  ['/contact', 'Contact'],
]

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  const closeNav = () => setShowNav(false)

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-width nav-wrap">
        <Link className="brand" to="/" onClick={closeNav} aria-label="Daniyal Nisar Rana home">
          <span className="brand-mark">DN</span>
          <span className="brand-copy">
            <strong>Daniyal Nisar Rana</strong>
            <small>Software Engineer</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={showNav ? 'Close navigation' : 'Open navigation'}
          aria-expanded={showNav}
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={showNav ? faXmark : faBars} />
        </button>

        <nav className={showNav ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeNav}
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              {label}
            </NavLink>
          ))}
          <div className="nav-socials">
            <a href="https://www.linkedin.com/in/daniyal-nisar99/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/DaniyalNisar" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Sidebar
