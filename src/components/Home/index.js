import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import './refinements.scss'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a','n','i','y','a','l,']
  const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className="hero-line hero-greeting">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
            </span>

            <span className="hero-line hero-name-line">
              <span className="hero-im">
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
              </span>
              <span className={`hero-initial ${letterClass} _15`}>D</span>
              <span className="hero-name">
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
              </span>
            </span>

            <span className="hero-line hero-role-line">
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24} />
            </span>
          </h1>

          <p className="hero-specialties">
            <span className="specialties-desktop">Backend Engineering / Java / Payments / Fintech / AI &amp; ML</span>
            <span className="specialties-mobile">Backend • Java • Payments • Fintech • AI/ML</span>
          </p>
          <p className="hero-intro">
            I build dependable software, solve hard engineering problems, and enjoy turning complex ideas into systems that work well.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
            <a href={`${process.env.PUBLIC_URL || ''}/Daniyal_Nisar_Resume.pdf`} download className="flat-button1">DOWNLOAD CV</a>
          </div>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
