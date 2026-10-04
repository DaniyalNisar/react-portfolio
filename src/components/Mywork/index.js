import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'

const MyWork = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showCards, setShowCards] = useState(false)
  const workContainerRef = useRef(null)

  const myWorks = [
    { id: 1, title: 'Cache Enhancement', excerpt: 'Optimized the caching layer of a high-throughput fintech application, improving throughput and reducing latency.', image: '/images/works/cache.jpg' },
    { id: 2, title: 'ISO 8583 Payments', excerpt: 'Built and integrated ISO 8583-based payment processing flows for secure, real-time financial transactions.', image: '/images/works/ISO8583.jpg' },
    { id: 3, title: 'AMEX Installment Plan', excerpt: 'Integrated installment-plan processing while preserving backend transaction integrity and payment flow correctness.', image: '/images/works/amex.jpg' },
    { id: 4, title: 'Alerts Enhancement', excerpt: 'Improved transaction-event alerting to make operational notifications faster and more reliable.', image: '/images/works/alert.jpg' },
    { id: 5, title: 'Teachify', excerpt: 'An online tutoring marketplace where educators offer courses and live sessions.', image: '/images/works/teachify.jpg' },
    { id: 6, title: 'Hospital Management System', excerpt: 'Built a full-stack system for patient records, appointments, doctor schedules and online booking.', image: '/images/works/hospital.jpg' },
    { id: 7, title: 'Game Store Management System', excerpt: 'Created a platform for browsing, purchasing and managing games with customer and admin features.', image: '/images/works/game.jpg' },
    { id: 8, title: 'Canvas Maker', excerpt: 'A small creative tool for composing images with configurable text placement, size and styling.', image: '/images/works/canvas.jpg' },
    { id: 9, title: 'LinkedIn Clone', excerpt: 'Developed a professional networking application with profiles, connections and posts.', image: '/images/works/linkedin.jpg' },
    { id: 10, title: 'Gmail Clone', excerpt: 'Recreated core email workflows including inbox views, threads and search with a responsive interface.', image: '/images/works/gmail.jpg' },
  ]

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    const timer2 = setTimeout(() => setShowCards(true), 1000)
    return () => { clearTimeout(timer1); clearTimeout(timer2) }
  }, [])

  const scrollLeft = () => workContainerRef.current?.scrollBy({ left: -320, behavior: 'smooth' })
  const scrollRight = () => workContainerRef.current?.scrollBy({ left: 320, behavior: 'smooth' })

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1><AnimatedLetters letterClass={letterClass} strArray={['D','a','n','i','y','a','l','\'','s',' ','W','o','r','k']} idx={15} /></h1>
          <p className="work-intro">A glimpse into the systems and applications I’ve worked on, from fintech and backend engineering to full-stack side projects.</p>
          <div className="work-scroll-wrapper">
            <div className="button-wrapper"><button className="scroll-button left" onClick={scrollLeft} aria-label="Scroll work left">&lt;</button></div>
            <div className="work-container" ref={workContainerRef}>
              {myWorks.map((post, index) => (
                <article className={`work-card ${showCards ? 'visible' : ''}`} key={post.id} style={{ transitionDelay: `${index * 0.12}s` }}>
                  <img src={post.image} alt="" className="work-image" loading="lazy" />
                  <h2>{post.title}</h2>
                  <p className="work-excerpt">{post.excerpt}</p>
                </article>
              ))}
            </div>
            <div className="button-wrapper"><button className="scroll-button right" onClick={scrollRight} aria-label="Scroll work right">&gt;</button></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default MyWork
