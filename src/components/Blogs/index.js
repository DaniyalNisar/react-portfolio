import './index.scss'
import { Link } from 'react-router-dom'

export const blogPosts = [
  {
    id: 1,
    title: 'Understanding Caching: A Simple Guide for Developers',
    date: 'May 04, 2025',
    excerpt: 'A practical introduction to in-memory, distributed, browser and database caching, plus the trade-offs behind common cache strategies.',
    topic: 'Backend',
  },
  {
    id: 2,
    title: '01 Matrix: BFS-Based Distance Calculation',
    date: 'June 23, 2025',
    excerpt: 'Why multi-source BFS is the clean solution for finding the nearest zero from every cell in a binary matrix.',
    topic: 'Algorithms',
  },
  {
    id: 3,
    title: 'Tips for Clean JavaScript Code',
    date: 'April 20, 2025',
    excerpt: 'Simple habits that make JavaScript easier to read, review and maintain across a growing codebase.',
    topic: 'JavaScript',
  },
  {
    id: 4,
    title: 'Designing for Developers',
    date: 'April 18, 2025',
    excerpt: 'A developer-focused look at the design decisions that make software interfaces clearer, more usable and easier to build.',
    topic: 'Engineering',
  },
]

const BlogPage = () => (
  <div className="container blog-page">
    <header className="blog-header">
      <span className="section-kicker">Writing</span>
      <h1>Engineering notes, explanations and problem-solving.</h1>
      <p>
        Notes on backend engineering, algorithms and software development. I use writing to make technical ideas
        easier to reason about and easier to revisit later.
      </p>
    </header>

    <section className="blog-grid" aria-label="Technical articles">
      {blogPosts.map((post) => (
        <article className="blog-card" key={post.id}>
          <div className="blog-meta">
            <span>{post.topic}</span>
            <time>{post.date}</time>
          </div>
          <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.id}`} className="read-more" aria-label={`Read ${post.title}`}>
            Read article →
          </Link>
        </article>
      ))}
    </section>
  </div>
)

export default BlogPage
