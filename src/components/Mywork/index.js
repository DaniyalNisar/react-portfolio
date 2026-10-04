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
    { id: 1, title: 'Cache & Performance Engineering', excerpt: 'Improved caching behavior in a high-throughput financial platform to reduce latency, avoid unnecessary database work and make transaction processing more consistent under load.', image: '/images/works/cache.jpg', tags: ['Java', 'Caching', 'Performance'] },
    { id: 2, title: 'ISO 8583 Payment Processing', excerpt: 'Built and enhanced backend flows for real-time card transactions, including message parsing, validation, response handling and payment-network specific behavior.', image: '/images/works/ISO8583.jpg', tags: ['Java', 'ISO 8583', 'Payments'] },
    { id: 3, title: 'Authorization, Clearing & Reversal Lifecycle', excerpt: 'Improved transaction lifecycle handling across authorization, clearing and reversal flows so balances, holds and completion states remain consistent across complex payment scenarios.', image: '/images/works/amex.jpg', tags: ['Payments', 'Backend', 'Transaction Lifecycle'] },
    { id: 4, title: 'Stand-In Processing Pipeline', excerpt: 'Worked on resilient background processing for card-state updates, including batched work, retry-safe status handling and reliable persistence for high-volume operational workflows.', image: '/images/works/alert.jpg', tags: ['Java', 'Batch Processing', 'Reliability'] },
    { id: 5, title: 'Balance & Spending Controls', excerpt: 'Implemented balance-level controls and validation logic used during transaction authorization, with attention to correctness across multiple spending and cash-access scenarios.', image: '/images/works/cache.jpg', tags: ['Fintech', 'Balances', 'Authorization'] },
    { id: 6, title: 'Card & Token Device Support', excerpt: 'Extended card and token-processing behavior for additional device and network scenarios while preserving compatibility with existing authorization flows.', image: '/images/works/ISO8583.jpg', tags: ['Tokens', 'Cards', 'Payments'] },
    { id: 7, title: 'Production Reliability & Concurrency', excerpt: 'Investigated difficult production issues involving shared state, parallel service execution and data consistency, then improved diagnostics and failure visibility for future incidents.', image: '/images/works/alert.jpg', tags: ['Concurrency', 'Debugging', 'Observability'] },
    { id: 8, title: 'Alerts Enhancement', excerpt: 'Improved transaction-event alerting so operational notifications were clearer, more dependable and easier to trace during support and production analysis.', image: '/images/works/alert.jpg', tags: ['Java', 'Events', 'Reliability'] },
    { id: 9, title: 'AMEX Installment Plan', excerpt: 'Implemented installment-plan processing while preserving transaction integrity and expected payment behavior across authorization and downstream processing.', image: '/images/works/amex.jpg', tags: ['Fintech', 'Backend', 'Transactions'] },
    { id: 10, title: 'Teachify', excerpt: 'Built an online tutoring marketplace where educators can offer courses and live sessions.', image: '/images/works/teachify.jpg', tags: ['React', 'Node.js', 'Web App'] },
    { id: 11, title: 'Hospital Management System', excerpt: 'Developed a full-stack system for patient records, appointments, doctor schedules and online booking.', image: '/images/works/hospital.jpg', tags: ['Full Stack', 'SQL', 'Web App'] },
    { id: 12, title: 'Game Store Management System', excerpt: 'Created a platform for browsing, purchasing and managing games with customer and administrative features.', image: '/images/works/game.jpg', tags: ['Full Stack', 'Database', 'UI'] },
    { id: 13, title: 'Canvas Maker', excerpt: 'Built a lightweight image composition tool with configurable text placement, size and styling.', image: '/images/works/canvas.jpg', tags: ['JavaScript', 'Canvas', 'UI'] },
    { id: 14, title: 'LinkedIn Clone', excerpt: 'Developed a professional networking application with profiles, connections and posts.', image: '/images/works/linkedin.jpg', tags: ['React', 'Social', 'Frontend'] },
    { id: 15, title: 'Gmail Clone', excerpt: 'Recreated core email workflows including inbox views, message threads and search in a responsive interface.', image: '/images/works/gmail.jpg', tags: ['React', 'Responsive', 'UI'] },
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
          <p className="work-intro">Selected work across backend engineering, payment systems, performance, reliability and full-stack development.</p>
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
