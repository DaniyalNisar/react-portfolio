import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser, faEnvelope,faBlog, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook, faInstagram,
}  from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS}  alt="logo" />
            <img className="sub-logo" src={LogoSubtitle}  alt="slobodan" />
        </Link>  
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#E9F4F8		" />
        </NavLink>
         <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#E9F4F8		" />
        </NavLink>
         <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#E9F4F8		" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="blog-link" to="/blogs">
            <FontAwesomeIcon icon={faBlog} color="#E9F4F8		" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="project-link" to="/mywork">
            <FontAwesomeIcon icon={faBriefcase} color="#E9F4F8		" />
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
            href="https://www.linkedin.com/in/daniyal-nisar-rana-7b6041209/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#E9F4F8	" />
          </a>
        </li>
          <li>
         <a 
            href="https://www.linkedin.com/in/daniyal-nisar-rana-7b6041209/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} color="#E9F4F8	" />
          </a>
        </li>
          <li>
         <a 
            href="https://www.linkedin.com/in/daniyal-nisar-rana-7b6041209/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#E9F4F8	" />
          </a>
        </li>
        
    </ul>
    </div>
)

export default Sidebar;