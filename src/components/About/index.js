import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faGitAlt, faJsSquare, faNode, faReact, faJava, faDocker } from '@fortawesome/free-brands-svg-icons'
import {useState, useEffect} from 'react'
import Loader from 'react-loaders'

const About = () => {

    const[letterClass, setLetterClass]= useState('text-animate');

    useEffect(() => {
        const timer= setTimeout(() =>{
        setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
    },[])

    return (
       <>
       <div className="container about-page">
            <div className='text-zone'>
                <h1><AnimatedLetters 
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ', 'm','e']}
                idx={15}
                />
                </h1>
                <p>
                    I’m a software engineer with a BS in Information Technology and over two years of experience building and optimizing critical systems that real people rely on 🚀 Over the last year, I’ve worked extensively in fintech—designing Java and Spring applications, integrating ISO 8583 messaging, collaborating with engineers at Visa’s payment network, and boosting the cache layer so our platform could sustain over 80 transactions per second while slashing response times ⚡                </p>
                <p>
                    My day-to-day toolkit includes Java, Spring Boot, and JavaScript, and I’m constantly expanding my horizons—lately diving into Python to prototype machine-learning back ends 🤖 I believe a great engineer shouldn’t be boxed into any single language or framework; adaptability and curiosity are what let us choose the right tool for each challenge 🔧                </p>
                <p>
                    I thrive on solving performance puzzles: whether it’s refactoring a service to eliminate bottlenecks, architecting a new feature for scale, or mentoring teammates on best practices, I get energized by tangible improvements and shared victories 🌟 At the same time, I’ve learned that robust software comes from clear communication and collaboration—two qualities I bring to every cross-functional discussion or sprint planning session 🤝                </p>
                
                <p>Outside of work, you’ll find me gaming 🎮 or tinkering with side projects—perhaps writing a tiny microservice, or simply sketching out ideas on a whiteboard. That playful curiosity often sparks my next big breakthrough, and keeps me sharp when I return to production code ✨</p>
                
                <p>What motivates me most is a relentless drive to learn and grow. Every line of code, every peer review, and every new framework is an opportunity to level up—not just for myself, but for the team and users who depend on our work. If you’re looking for an engineer with solid expertise, hands-on performance tuning skills, and a passion for continuous learning, I’d love to connect and see what we can build together 🌱
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner" >
                    <div className="face1">
                        <FontAwesomeIcon icon={faJava} color="#EA2D2E" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
                    </div>
                    <div className="face3">
                         <FontAwesomeIcon icon={faReact} color="#61dbfb" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faNode} color="#215732" />
                    </div>
                </div>
            </div>
        </div>  
         <Loader type="pacman" />
         </>
        )
}

export default About;