import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';


const MyWork = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showCards, setShowCards] = useState(false);
  const workContainerRef = useRef(null); // ref for work container

  const myWorks = [
    {
      id: 1,
      title: 'Why I Built This Portfolio',
      date: 'April 28, 2025',
      excerpt: 'Sharing the story and motivation behind building my own portfolio site using modern web technologies...',
      image: '/images/blogs/react.png'
    },
    {
      id: 2,
      title: 'Working with React and SCSS',
      date: 'April 25, 2025',
      excerpt: 'A deep dive into how SCSS enhances styling flexibility and keeps your React project scalable...',
      image: '/images/blogs/react.png'
    },
    {
      id: 3,
      title: 'Tips for Clean JavaScript Code',
      date: 'April 20, 2025',
      excerpt: 'These practices help you write cleaner, more maintainable JavaScript in any project...',
      image: '/images/blogs/react.png'
    },
    {
      id: 4,
      title: 'Designing for Developers',
      date: 'April 18, 2025',
      excerpt: 'Bridging the gap between design and code can unlock new levels of creativity and productivity...',
      image: '/images/blogs/react.png'
    }
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowCards(true);
    }, 1000); // show cards after 1 sec

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scrollLeft = () => {
    workContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    workContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['D','a','n','i','y','a','l','\'','s',' ','W','o','r','k']}
              idx={15}
            />
          </h1>
          <p className="work-intro">
            Welcome to my work where I share insights, tutorials, and thoughts on development, design, and tech!
          </p>

          <div className="work-scroll-wrapper">
            <div className='button-wrapper'>
              <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
            </div>

            <div className="work-container" ref={workContainerRef}>
              {myWorks.map((post, index) => (
                <div
                  className={`work-card ${showCards ? 'visible' : ''}`}
                  key={post.id}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <img src={post.image} alt={post.title} className="work-image" />
                  <h2>{post.title}</h2>
                  <p className="work-date">{post.date}</p>
                  <p className="work-excerpt">{post.excerpt}</p>
                  {/* <Link to={`/mywork/${post.id}`} className="read-more">Read More</Link> */}
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

export default MyWork;
