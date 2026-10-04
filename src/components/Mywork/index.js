import Loader from 'react-loaders'
import './index.scss'
import './refinements.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'

const withBase = (path) => `${process.env.PUBLIC_URL || ''}${path}`
const fallbackImage = withBase('/images/fallback.svg')

const MyWork = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showCards, setShowCards] = useState(false)
  const workContainerRef = useRef(null)

  const myWorks = [
    { id: 1, title: 'Cache Enhancement', excerpt: 'Improved the caching layer of a high-throughput fintech application to reduce latency and support more consistent transaction processing.', image: '/images/works/cache.jpg', tags: ['Java', 'Caching', 'Performance'] },
    { id: 2, title: 'ISO 8583 Payments', excerpt: 'Worked on ISO 8583 payment flows and backend transaction processing for real-time financial systems.', image: '/images/works/ISO8583.jpg', tags: ['Java', 'ISO 8583', 'Payments'] },
    { id: 3, title: 'AMEX Installment Plan', excerpt: 'Implemented installment-plan processing while preserving transaction integrity and expected payment behavior.', image: '/images/works/amex.jpg', tags: ['Fintech', 'Backend', 'Transactions'] },
    { id: 4, title: 'Alerts Enhancement', excerpt: 'Improved transaction-event alerting so operational notifications were clearer and more dependable.', image: '/images/works/alert.jpg', tags: ['Java', 'Events', 'Reliability'] },
    { id: 5, title: 'Teachify', excerpt: 'Built an online tutoring marketplace where educators can offer courses and live sessions.', image: '/images/works/teachify.jpg', tags: ['React', 'Node.js', 'Web App'] },
    { id: 6, title: 'Hospital Management System', excerpt: 'Developed a full-stack system for patient records, appointments, doctor schedules and online booking.', image: '/images/works/hospital.jpg', tags: ['Full Stack', 'SQL', 'Web App'] },
    { id: 7, title: 'Game Store Management System', excerpt: 'Created a platform for browsing, purchasing and managing games with customer and administrative features.', image: '/images/works/game.jpg', tags: ['Full Stack', 'Database', 'UI'] },
    { id: 8, title: 'Canvas Maker', excerpt: 'Built a lightweight image composition tool with configurable text placement, size and styling.', image: '/images/works/canvas.jpg', tags: ['JavaScript', 'Canvas', 'UI'] },
    { id: 9, title: 'LinkedIn Clone', excerpt: 'Developed a professional networking application with profiles, connections and posts.', image: '/images/works/linkedin.jpg', tags: ['React', 'Social', 'Frontend'] },
    { id: 10, title: 'Gmail Clone', excerpt: 'Recreated core email workflows including inbox views, message threads and search in a responsive interface.', image: '/images/works/gmail.jpg', tags: ['React', 'Responsive', 'UI'] },
  ]

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    const timer2 = setTimeout(() => setShowCards(true), 300)
    return () => { clearTimeout(timer1); clearTimeout(timer2) }
  }, [])

  const scrollCarousel = (direction) => {
    const container = workContainerRef.current
    if (!container) return
    const card = container.querySelector('.work-card')
    const gap = parseFloat(getComputedStyle(container).gap) || 16
    const distance = card ? card.getBoundingClientRect().width + gap : container.clientWidth * 0.8
    container.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <>
      <div className="container work-page">
        <div className="work-signal" aria-hidden="true">
          <span className="signal-core" />
          <span className="signal-ring signal-ring-one" />
          <span className="signal-ring signal-ring-two" />
          <span className="signal-dot signal-dot-one" />
          <span className="signal-dot signal-dot-two" />
          <span className="signal-dot signal-dot-three" />
        </div>

        <div className="text-zone">
          <h1><AnimatedLetters letterClass={letterClass} strArray={['D','a','n','i','y','a','l','\'','s',' ','W','o','r','k']} idx={15} /></h1>
          <p className="work-intro">Selected work across backend engineering, payments, performance improvements and full-stack projects.</p>
          <div className="work-scroll-wrapper">
            <div className="button-wrapper"><button className="scroll-button left" onClick={() => scrollCarousel(-1)} aria-label="Scroll work left">&lt;</button></div>
            <div className="work-container" ref={workContainerRef} tabIndex="0" aria-label="Selected engineering work">
              {myWorks.map((post) => (
                <article className={`work-card ${showCards ? 'visible' : ''}`} key={post.id}>
                  <img
                    src={withBase(post.image)}
                    alt={`${post.title} project`}
                    className="work-image"
                    loading="lazy"
                    width="640"
                    height="360"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = fallbackImage
                    }}
                  />
                  <h2>{post.title}</h2>
                  <p className="work-excerpt">{post.excerpt}</p>
                  <div className="work-tags" aria-label={`${post.title} technologies`}>
                    {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <div className="button-wrapper"><button className="scroll-button right" onClick={() => scrollCarousel(1)} aria-label="Scroll work right">&gt;</button></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default MyWork
