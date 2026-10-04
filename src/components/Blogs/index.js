import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { articles as blogPosts } from '../../articles'

const BlogPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showCards, setShowCards] = useState(false)
  const blogContainerRef = useRef(null)

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    const timer2 = setTimeout(() => setShowCards(true), 800)
    return () => { clearTimeout(timer1); clearTimeout(timer2) }
  }, [])

  const scrollLeft = () => blogContainerRef.current?.scrollBy({ left: -340, behavior: 'smooth' })
  const scrollRight = () => blogContainerRef.current?.scrollBy({ left: 340, behavior: 'smooth' })

  return (
    <>
      <div className="container blog-page">
        <div className="text-zone">
          <h1><AnimatedLetters letterClass={letterClass} strArray={['D','a','n','i','y','a','l','\'','s',' ','B','l','o','g']} idx={15} /></h1>
          <p className="blog-intro">Notes on software engineering, backend systems, performance, algorithms and the technical ideas I’m currently exploring.</p>
          <div className="blog-scroll-wrapper">
            <div className="button-wrapper"><button className="scroll-button left" onClick={scrollLeft} aria-label="Scroll blog left">&lt;</button></div>
            <div className="blog-container" ref={blogContainerRef} tabIndex="0" aria-label="Engineering articles">
              {blogPosts.map((post, index) => (
                <article className={`blog-card ${showCards ? 'visible' : ''}`} key={post.id} style={{ transitionDelay: `${index * 0.08}s` }}>
                  <h2>{post.title}</h2>
                  <p className="blog-date">{post.date}</p>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more" aria-label={`Read ${post.title}`}>Read article</Link>
                </article>
              ))}
            </div>
            <div className="button-wrapper"><button className="scroll-button right" onClick={scrollRight} aria-label="Scroll blog right">&gt;</button></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default BlogPage
