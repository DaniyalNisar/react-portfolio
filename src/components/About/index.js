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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio vero eligendi temporibus dicta deserunt et nihil culpa voluptas facilis, atque qui neque iusto vitae sit dolores sint doloremque tempora soluta? Hic nulla totam aspernatur tempore. Laboriosam illo autem, in officiis sint inventore praesentium nisi, magnam culpa, expedita itaque ad suscipit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta modi dolores, eius molestiae illo beatae expedita reiciendis eveniet pariatur ab culpa commodi perferendis voluptate velit? Accusamus cumque nulla odio eos molestiae, fugit nam nostrum quis unde id tempore quas autem?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid aspernatur ipsa eius aperiam sed amet aliquam nisi consequatur sapiente, incidunt hic debitis ea veniam mollitia magni atque corrupti quas tenetur soluta asperiores unde sint? Fugit?
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