import { Link } from 'react-router-dom'
import './index.scss'

const highlights = [
  ['Payments engineering', 'ISO 8583, card networks, authorization and clearing flows'],
  ['Backend systems', 'Java, Spring Boot, OLTP services, APIs and production debugging'],
  ['Performance', 'Caching, high-throughput transaction processing and latency reduction'],
  ['AI / ML', 'Applied machine learning, AI systems and graduate-level AI study'],
]

const stack = ['Java', 'Spring Boot', 'ISO 8583', 'SQL', 'Informix', 'Linux', 'Git', 'Docker', 'Python', 'AI / ML']

const Home = () => (
  <div className="container home-page">
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="section-kicker">Backend · Payments · Fintech · AI</span>
        <h1 id="hero-title">
          Building reliable payment systems and high-performance backend software.
        </h1>
        <p className="hero-lead">
          I’m Daniyal Nisar Rana, a software engineer focused on Java backend engineering,
          fintech and payment processing. I work on transaction-heavy systems where correctness,
          latency and production reliability matter, while continuing to build depth in AI and machine learning.
        </p>
        <div className="hero-actions">
          <Link to="/mywork" className="button button-primary">Explore my work</Link>
          <Link to="/contact" className="button button-secondary">Contact me</Link>
          <a href="/Daniyal_Nisar_Resume.pdf" className="text-link" download>Download résumé</a>
        </div>
        <div className="stack-list" aria-label="Core technologies">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>

      <aside className="hero-panel" aria-label="Engineering focus">
        <div className="status-line"><span className="status-dot" /> Software Engineer · Lahore, Pakistan</div>
        <h2>Engineering focus</h2>
        <div className="highlight-list">
          {highlights.map(([title, text]) => (
            <div className="highlight-item" key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>

    <section className="home-strip" aria-label="Professional summary">
      <div><strong>Backend first</strong><span>Production Java systems and service design</span></div>
      <div><strong>Payments domain</strong><span>Visa, Mastercard, Amex and transaction processing</span></div>
      <div><strong>Performance minded</strong><span>Concurrency, caching, debugging and data integrity</span></div>
    </section>
  </div>
)

export default Home
