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
          <p>
            My core toolkit includes Java, Spring Boot, SQL, Linux and Git. Alongside my backend work, I’m building deeper knowledge in Python, machine learning and AI, with an interest in applying those skills to practical engineering problems rather than treating them as separate disciplines.
          </p>
          <div className="exploring-block" aria-label="Currently exploring">
            <span className="exploring-label">Currently exploring</span>
            <div className="exploring-items">
              <span>Applied AI</span>
              <span>LLM systems</span>
              <span>MLOps</span>
              <span>Optimization</span>
            </div>
          </div>
          <p>
            I value clear communication, thoughtful engineering and steady improvement. Outside work, I spend time on side projects, technical reading and gaming.
          </p>
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
