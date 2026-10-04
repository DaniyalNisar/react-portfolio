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
            I’m a software engineer with a BS in Information Technology and hands-on experience building and optimizing backend systems, especially in fintech and payments. My work includes Java and Spring-based services, ISO 8583 transaction processing, production debugging, caching, and performance improvements in transaction-heavy environments.
          </p>
          <p>
            My day-to-day toolkit includes Java, Spring Boot, SQL, Linux, Git and backend engineering tools. Alongside that, I’m continuing to build depth in Python, machine learning and AI so I can combine strong software engineering with intelligent systems where it makes sense.
          </p>
          <p>
            I enjoy solving performance and reliability problems: tracing production issues, reducing bottlenecks, improving service behavior, and making systems easier to reason about. I also value clear communication and collaboration because complex engineering work rarely succeeds in isolation.
          </p>
          <p>
            Outside work, I like gaming, experimenting with side projects, and learning new technical ideas. That curiosity is a big part of how I approach engineering.
          </p>
        </div>

        <div className="stage-cube-cont" aria-label="Technology stack animation">
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
