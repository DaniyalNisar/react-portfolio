import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser, faEnvelope,faBlog, faBriefcase, faBars} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook, faInstagram,
}  from '@fortawesome/free-brands-svg-icons'
import { useState} from 'react';

const Sidebar = () => {
    
  const [showNav, setShowNav] = useState(false);

  return (<div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS}  alt="logo" />
            <img className="sub-logo" src={LogoSubtitle}  alt="Daniyal" />
        </Link>  
      {/* <div className='hamburger-icon'> */}
        <FontAwesomeIcon icon={faBars}
          onClick={() =>showNav ? setShowNav(false) : setShowNav(true)} 
          color="#1EB980"
          size="2x"
          className='hamburger-icon'
        />
      {/* </div> */}
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink onClick={() =>setShowNav(false)} exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon  onClick={() =>setShowNav(false)} icon={faHome} color="#E9F4F8		" />
        </NavLink>
         <NavLink onClick={() =>setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon onClick={() =>setShowNav(false)}  icon={faUser} color="#E9F4F8		" />
        </NavLink>
         <NavLink onClick={() =>setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon onClick={() =>setShowNav(false)} icon={faEnvelope} color="#E9F4F8		" />
        </NavLink>
        <NavLink onClick={() =>setShowNav(false)} exact="true" activeclassname="active" className="blog-link" to="/blogs">
            <FontAwesomeIcon  icon={faBlog} color="#E9F4F8		" />
        </NavLink>
        <NavLink onClick={() =>setShowNav(false)} exact="true" activeclassname="active" className="project-link" to="/mywork">
            <FontAwesomeIcon onClick={() =>setShowNav(false)} icon={faBriefcase} color="#E9F4F8		" />
        </NavLink>
        
    </nav>

    <ul>
        <li>
         <a 
            href="https://www.linkedin.com/in/daniyal-nisar-rana-7b6041209/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#E9F4F8" />
          </a>
        </li>
        <li>
         <a 
            href="https://github.com/DaniyalNisar"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#E9F4F8	" />
          </a>
        </li>
          <li>
         <a 
            href="https://www.facebook.com/share/18dovEmFev/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} color="#E9F4F8	" />
          </a>
        </li>
          <li>
         <a 
            href="https://www.instagram.com/daniyal.nisar99/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#E9F4F8	" />
          </a>
        </li>
        
    </ul>
  
  </div>

  )
}
export default Sidebar;