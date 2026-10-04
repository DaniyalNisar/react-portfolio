import './index.scss'
import './refinements.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEnvelope, faPen, faCode, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)} aria-label="Go to home page">
        <img src={LogoS} alt="Daniyal Nisar logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Daniyal" />
      </Link>

      <button
        type="button"
        className="hamburger-button"
        aria-label="Toggle navigation"
        aria-expanded={showNav}
        onClick={() => setShowNav(!showNav)}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      <nav className={showNav ? 'mobile-show' : ''} aria-label="Primary navigation">
        <NavLink onClick={() => setShowNav(false)} to="/" end>
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/about">
          <FontAwesomeIcon icon={faUser} />
          <span>About</span>
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contact</span>
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/blogs">
          <FontAwesomeIcon icon={faPen} />
          <span>Writing</span>
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/mywork">
          <FontAwesomeIcon icon={faCode} />
          <span>Work</span>
        </NavLink>
      </nav>

      <ul className="social-links" aria-label="Professional links">
        <li>
          <a href="https://www.linkedin.com/in/daniyal-nisar99/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/DaniyalNisar" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
