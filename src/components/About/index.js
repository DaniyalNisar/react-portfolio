import './index.scss'

const strengths = [
  {
    title: 'Payments & fintech',
    text: 'Hands-on work with transaction processing, ISO 8583 messaging, card-network integrations, authorization, clearing, reversals and production payment flows.',
  },
  {
    title: 'Backend engineering',
    text: 'Java and Spring Boot services, SQL-heavy systems, production debugging, data integrity, concurrency, API design and maintainable service-layer architecture.',
  },
  {
    title: 'Performance & reliability',
    text: 'Experience improving caching and transaction throughput, investigating race conditions, reducing latency and diagnosing hard-to-reproduce production behavior.',
  },
  {
    title: 'AI & machine learning',
    text: 'Graduate-level AI study with an interest in applied ML, NLP/LLMs, probability, optimization and building AI systems that complement strong software engineering fundamentals.',
  },
]

const About = () => (
  <div className="container about-page">
    <section className="about-intro" aria-labelledby="about-title">
      <div>
        <span className="section-kicker">About</span>
        <h1 id="about-title">Engineering for systems where correctness and reliability matter.</h1>
      </div>
      <div className="about-copy">
        <p>
          I’m a software engineer based in Lahore, Pakistan, working primarily on backend and fintech systems.
          My strongest area is Java-based transaction processing: the kind of software where a small bug can affect
          real money, real customers and time-sensitive production flows.
        </p>
        <p>
          My work spans payment-network integrations, ISO 8583, high-throughput OLTP services, caching,
          databases and production debugging. I enjoy problems that sit between software design and systems behavior:
          race conditions, state transitions, data consistency, performance bottlenecks and complex edge cases.
        </p>
        <p>
          Alongside backend engineering, I’m developing deeper expertise in artificial intelligence and machine learning.
          I see AI as an additional engineering capability rather than a replacement for fundamentals, and I’m especially
          interested in combining robust software systems with practical ML and LLM-based applications.
        </p>
      </div>
    </section>

    <section className="strength-grid" aria-label="Core engineering strengths">
      {strengths.map((item, index) => (
        <article className="strength-card" key={item.title}>
          <span className="card-number">0{index + 1}</span>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      ))}
    </section>

    <section className="about-bottom">
      <div>
        <span className="section-kicker">How I work</span>
        <h2>Understand the flow, isolate the failure, fix the system.</h2>
      </div>
      <p>
        I prefer to understand a system end-to-end before changing it. That means tracing requests, validating data,
        comparing successful and failing paths, measuring behavior and then making the smallest reliable change.
        It is an approach that works equally well for payment incidents, performance issues and new product features.
      </p>
    </section>
  </div>
)

export default About
