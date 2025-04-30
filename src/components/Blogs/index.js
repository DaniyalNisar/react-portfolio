import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';

const BlogPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const blogContainerRef = useRef(null); // ref for blog container

  const blogPosts = [
    {
      id: 1,
      title: 'Why I Built This Portfolio',
      date: 'April 28, 2025',
      excerpt: 'Sharing the story and motivation behind building my own portfolio site using modern web technologies...'
    },
    {
      id: 2,
      title: 'Working with React and SCSS',
      date: 'April 25, 2025',
      excerpt: 'A deep dive into how SCSS enhances styling flexibility and keeps your React project scalable...'
    },
    {
      id: 3,
      title: 'Tips for Clean JavaScript Code',
      date: 'April 20, 2025',
      excerpt: 'These practices help you write cleaner, more maintainable JavaScript in any project...'
    },
    {
      id: 4,
      title: 'Designing for Developers',
      date: 'April 18, 2025',
      excerpt: 'Bridging the gap between design and code can unlock new levels of creativity and productivity...'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollLeft = () => {
    blogContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    blogContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <>
      <div className="container blog-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['D','a','n','i','y','a','l','\'','s',' ','B','l','o','g','s']}
              idx={15}
            />
          </h1>
          <p className="blog-intro">
            Welcome to my blog where I share insights, tutorials, and thoughts on development, design, and tech!
          </p>

          <div className="blog-scroll-wrapper">
            <div className='button-wrapper'>
                <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
            </div>    

            <div className="blog-container" ref={blogContainerRef}>
              {blogPosts.map(post => (
                <div className="blog-card" key={post.id}>
                  <h2>{post.title}</h2>
                  <p className="blog-date">{post.date}</p>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button className="read-more">Read More</button>
                </div>
              ))}
            </div>

            <div className='button-wrapper'>
                <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
            </div>

          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default BlogPage;
