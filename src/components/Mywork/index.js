import './index.scss'

const projects = [
  {
    title: 'High-throughput cache engineering',
    category: 'Backend · Performance',
    text: 'Improved caching behavior in a transaction-heavy fintech platform, increasing throughput and reducing repeated data access in latency-sensitive flows.',
    tags: ['Java', 'Caching', 'OLTP', 'Performance'],
  },
  {
    title: 'ISO 8583 payment integrations',
    category: 'Payments · Fintech',
    text: 'Worked on authorization and transaction messaging across card-payment flows, handling ISO 8583 fields, network-specific behavior and production edge cases.',
    tags: ['ISO 8583', 'Visa', 'Mastercard', 'Amex'],
  },
  {
    title: 'Authorization, clearing and reversals',
    category: 'Payments · Transaction lifecycle',
    text: 'Handled complex state transitions across authorization, clearing and reversal processing, including hold behavior, completion rules and multi-clearing scenarios.',
    tags: ['Java', 'Payments', 'State', 'Reliability'],
  },
  {
    title: 'Stand-in file processing',
    category: 'Backend · Data processing',
    text: 'Built batch-oriented processing around card stand-in activity, status transitions, scheduled execution and database synchronization for resilient downstream updates.',
    tags: ['Java', 'Batch', 'SQL', 'Scheduling'],
  },
  {
    title: 'Concurrency and production incident analysis',
    category: 'Reliability · Debugging',
    text: 'Investigated race conditions and shared-state issues across parallel services, correlating logs, execution threads and data state to isolate intermittent production failures.',
    tags: ['Concurrency', 'Debugging', 'Logs', 'Root cause'],
  },
  {
    title: 'Applied AI and ML projects',
    category: 'AI · Machine learning',
    text: 'Exploring predictive modeling, model evaluation, NLP/LLM concepts and the engineering required to move ML ideas toward reliable real-world applications.',
    tags: ['Python', 'ML', 'AI', 'NLP'],
  },
]

const MyWork = () => (
  <div className="container work-page">
    <header className="work-header">
      <span className="section-kicker">Selected work</span>
      <h1>Systems, payment flows and engineering problems I’ve worked on.</h1>
      <p>
        A selection of the kinds of problems I solve professionally. Client-sensitive details are intentionally omitted;
        the focus here is on engineering scope, system behavior and technical depth.
      </p>
    </header>

    <section className="work-grid" aria-label="Selected engineering work">
      {projects.map((project, index) => (
        <article className="work-card" key={project.title}>
          <div className="work-card-top">
            <span className="work-index">0{index + 1}</span>
            <span className="work-category">{project.category}</span>
          </div>
          <h2>{project.title}</h2>
          <p>{project.text}</p>
          <div className="work-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>
      ))}
    </section>
  </div>
)

export default MyWork
