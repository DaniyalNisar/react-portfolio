import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBlog, faBriefcase, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
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
        <NavLink onClick={() => setShowNav(false)} to="/" end><FontAwesomeIcon icon={faHome} /><span>HOME</span></NavLink>
        <NavLink onClick={() => setShowNav(false)} className="about-link" to="/about"><FontAwesomeIcon icon={faUser} /><span>ABOUT</span></NavLink>
        <NavLink onClick={() => setShowNav(false)} className="contact-link" to="/contact"><FontAwesomeIcon icon={faEnvelope} /><span>CONTACT</span></NavLink>
        <NavLink onClick={() => setShowNav(false)} className="blog-link" to="/blogs"><FontAwesomeIcon icon={faBlog} /><span>BLOG</span></NavLink>
        <NavLink onClick={() => setShowNav(false)} className="project-link" to="/mywork"><FontAwesomeIcon icon={faBriefcase} /><span>MY WORK</span></NavLink>
      </nav>

      <ul className="social-links" aria-label="Social links">
        <li><a href="https://www.linkedin.com/in/daniyal-nisar99/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://github.com/DaniyalNisar" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://www.facebook.com/share/18dovEmFev/" target="_blank" rel="noreferrer" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="https://www.instagram.com/daniyal.nisar99/" target="_blank" rel="noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
      </ul>
    </div>
  )
}

export default Sidebar
