import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray= ['a','n','i','y','a','l,']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r.']

  useEffect(() => {
  const timer= setTimeout(() =>{
    setLetterClass('text-animate-hover')
  }, 4000)
  return () => clearTimeout(timer)
},[])
 
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br /> 
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={17}
                />
                </h1>
                <h2>Full Stack Developer / JavaScript / MERN / Machine Learning</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
                <a href="/cv.pdf"
                   download
                   className="flat-button1"
                >
                    DOWNLOAD CV
                </a>       
            </div>
            <Logo />
            
        </div>
        <Loader type="pacman" />
        </>
    )    
}

export default Home;