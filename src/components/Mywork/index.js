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
  const [activeFilter, setActiveFilter] = useState('All')
  const workContainerRef = useRef(null)

  const myWorks = [
    { id: 1, title: 'Cache & Performance Engineering', excerpt: 'Improved caching and data-access behavior for transaction-heavy backend services to reduce latency and improve consistency under load.', image: '/images/works/cache.jpg', tags: ['Java', 'Caching', 'Performance'], category: 'Backend', featured: true },
    { id: 2, title: 'ISO 8583 Payment Processing', excerpt: 'Built and enhanced real-time payment processing flows across authorization, response handling and network-specific transaction behavior.', image: '/images/works/ISO8583.jpg', tags: ['Java', 'ISO 8583', 'Payments'], category: 'Payments', featured: true },
    { id: 3, title: 'Authorization, Clearing & Reversal Lifecycle', excerpt: 'Worked on transaction lifecycle behavior across authorization, clearing and reversal paths with a focus on balance integrity and correct hold management.', image: '/images/works/amex.jpg', tags: ['Payments', 'Lifecycle', 'Backend'], category: 'Payments', featured: true },
    { id: 4, title: 'Stand-In Processing Pipeline', excerpt: 'Implemented backend processing for stand-in transaction updates with batching, status tracking and reliable downstream persistence.', image: '/images/works/alert.jpg', tags: ['Java', 'Batch Processing', 'Reliability'], category: 'Backend', featured: true },
    { id: 5, title: 'Balance & Spending Controls', excerpt: 'Enhanced available-balance and spending-control logic for card transactions while preserving consistency across authorization flows.', image: '/images/works/cache.jpg', tags: ['Fintech', 'Balances', 'Rules'], category: 'Payments' },
    { id: 6, title: 'Card & Token Device Support', excerpt: 'Extended card and token processing for additional device and network scenarios while keeping behavior compatible with existing payment flows.', image: '/images/works/ISO8583.jpg', tags: ['Cards', 'Tokens', 'Networks'], category: 'Payments' },
    { id: 7, title: 'Production Reliability & Concurrency', excerpt: 'Investigated difficult production issues involving shared state, concurrency and data timing, then improved diagnostics and service behavior.', image: '/images/works/alert.jpg', tags: ['Concurrency', 'Debugging', 'Reliability'], category: 'Reliability' },
    { id: 8, title: 'Alerts Enhancement', excerpt: 'Improved transaction-event alerting so operational notifications were clearer and more dependable.', image: '/images/works/alert.jpg', tags: ['Java', 'Events', 'Reliability'], category: 'Reliability' },
    { id: 9, title: 'AMEX Installment Plan', excerpt: 'Implemented installment-plan processing while preserving transaction integrity and expected payment behavior.', image: '/images/works/amex.jpg', tags: ['Fintech', 'Backend', 'Transactions'], category: 'Payments' },
    { id: 10, title: 'Teachify', excerpt: 'Built an online tutoring marketplace where educators can offer courses and live sessions.', image: '/images/works/teachify.jpg', tags: ['React', 'Node.js', 'Web App'], category: 'Full Stack' },
    { id: 11, title: 'Hospital Management System', excerpt: 'Developed a full-stack system for patient records, appointments, doctor schedules and online booking.', image: '/images/works/hospital.jpg', tags: ['Full Stack', 'SQL', 'Web App'], category: 'Full Stack' },
    { id: 12, title: 'Game Store Management System', excerpt: 'Created a platform for browsing, purchasing and managing games with customer and administrative features.', image: '/images/works/game.jpg', tags: ['Full Stack', 'Database', 'UI'], category: 'Full Stack' },
    { id: 13, title: 'Canvas Maker', excerpt: 'Built a lightweight image composition tool with configurable text placement, size and styling.', image: '/images/works/canvas.jpg', tags: ['JavaScript', 'Canvas', 'UI'], category: 'Full Stack' },
    { id: 14, title: 'LinkedIn Clone', excerpt: 'Developed a professional networking application with profiles, connections and posts.', image: '/images/works/linkedin.jpg', tags: ['React', 'Social', 'Frontend'], category: 'Full Stack' },
    { id: 15, title: 'Gmail Clone', excerpt: 'Recreated core email workflows including inbox views, message threads and search in a responsive interface.', image: '/images/works/gmail.jpg', tags: ['React', 'Responsive', 'UI'], category: 'Full Stack' },
  ]

  const filters = ['All', 'Backend', 'Payments', 'Reliability', 'Full Stack']
  const filteredWorks = activeFilter === 'All' ? myWorks : myWorks.filter((item) => item.category === activeFilter)
  const featuredWorks = myWorks.filter((item) => item.featured)

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

  const setFilter = (filter) => {
    setActiveFilter(filter)
    workContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
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
          <p className="work-intro">Selected work across backend engineering, payments, production reliability and full-stack development.</p>

          <section className="featured-work" aria-label="Featured engineering work">
            {featuredWorks.map((item) => (
              <article className="featured-work-card" key={item.id}>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </article>
            ))}
          </section>

          <div className="work-filters" aria-label="Filter work by category">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="work-scroll-wrapper">
            <div className="button-wrapper"><button className="scroll-button left" onClick={() => scrollCarousel(-1)} aria-label="Scroll work left">&lt;</button></div>
            <div className="work-container" ref={workContainerRef} tabIndex="0" aria-label="Selected engineering work">
              {filteredWorks.map((post) => (
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
                  <span className="work-category">{post.category}</span>
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
