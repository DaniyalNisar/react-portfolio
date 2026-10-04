import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJsSquare, faNode, faReact, faJava, faDocker } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15} />
          </h1>
          <p>
            I’m a software engineer focused on backend systems, fintech and payment processing. My work includes Java and Spring-based services, ISO 8583 transaction flows, production debugging, caching and performance improvements in transaction-heavy environments.
          </p>
          <p>
            I enjoy working on systems where correctness, latency and reliability matter. That often means tracing difficult production issues, understanding data and concurrency problems, improving service behavior and making the code easier to maintain.
          </p>

          <div className="profile-grid" aria-label="Experience and education">
            <article className="profile-card">
              <span className="profile-kicker">Experience</span>
              <h2>Software Engineer · i2c, Inc.</h2>
              <p>Backend and payments engineering across real-time transaction systems, production reliability, performance and payment lifecycle flows.</p>
            </article>
            <article className="profile-card">
              <span className="profile-kicker">Education</span>
              <h2>BS Information Technology · PUCIT</h2>
              <p>CGPA 3.87, ranked first in class. Currently continuing graduate study in Artificial Intelligence at LUMS.</p>
            </article>
          </div>

          <div className="exploring-block" aria-label="Currently exploring">
            <span className="exploring-label">Currently exploring</span>
            <div className="exploring-items">
              <span>Applied AI</span>
              <span>LLM systems</span>
              <span>MLOps</span>
              <span>Optimization</span>
            </div>
          </div>

          <div className="about-links">
            <a href="https://www.linkedin.com/in/daniyal-nisar99/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/DaniyalNisar" target="_blank" rel="noreferrer">GitHub</a>
            <a href={`${process.env.PUBLIC_URL || ''}/Daniyal_Nisar_Resume.pdf`} target="_blank" rel="noreferrer">View Resume</a>
          </div>
        </div>

        <div className="stage-cube-cont" aria-label="Animated technology stack">
          <div className="cubespinner">
            <div className="face1"><FontAwesomeIcon icon={faJava} /></div>
            <div className="face2"><FontAwesomeIcon icon={faDocker} /></div>
            <div className="face3"><FontAwesomeIcon icon={faReact} /></div>
            <div className="face4"><FontAwesomeIcon icon={faJsSquare} /></div>
            <div className="face5"><FontAwesomeIcon icon={faGitAlt} /></div>
            <div className="face6"><FontAwesomeIcon icon={faNode} /></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
