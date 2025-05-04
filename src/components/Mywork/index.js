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
      title: '🔄 Cache Enhancement',
      // date: 'April 28, 2025',
      excerpt: 'Optimized the caching layer of a high-throughput fintech app to handle 80+ transactions per second, significantly improving performance and reducing latency.',
      image: '/images/works/cache.jpg'
    },
    {
      id: 2,
      title: '💳 ISO 8583 Payments',
      date: 'April 25, 2025',
      excerpt: 'Built and integrated ISO 8583-based payment solutions for institutions such as Smart Visa and Belize Bank, enabling secure, real-time financial transactions.',
      image: '/images/works/ISO8583.jpg'
    },
    {
      id: 3,
      title: '💳 AMEX Installment Plan',
      date: 'April 20, 2025',
      excerpt: 'Integrated an installment plan system for American Express, allowing customers to split payments seamlessly while maintaining backend integrity.',
      image: '/images/works/amex.jpg'
    },
    {
      id: 4,
      title: '🚨 Alerts Enhancement',
      date: 'April 18, 2025',
      excerpt: 'Improved the alerting system to ensure faster, more reliable notifications for key transaction events and potential system failures.',
      image: '/images/works/alert.jpg'
    },
    {
      id: 5,
      title: '📚 Teachify',
      date: 'April 18, 2025',
      excerpt: 'An online tutoring marketplace where educators offer courses and live sessions',
      image: '/images/works/teachify.jpg'
    },
    {
      id: 6,
      title: '🏥 Hospital Management System',
      date: 'April 18, 2025',
      excerpt: 'Built a full-stack system to manage patient records, appointments, and doctor schedules — with an online booking feature for patients.',
      image: '/images/works/hospital.jpg'
    },
    {
      id: 7,
      title: '🎮 Game Store Management System',
      date: 'April 18, 2025',
      excerpt: 'Created a platform for browsing, purchasing, and managing games with support for order, game libraries, and admin features.',
      image: '/images/works/game.jpg'
    },
    {
      id: 8,
      title: '🎨 Canvas Maker',
      date: 'April 18, 2025',
      excerpt: 'A simple tool that lets you upload images and add customizable text on the top, bottom, or center — with control over text size and color.',
      image: '/images/works/canvas.jpg'
    },
    {
      id: 9,
      title: '👥 LinkedIn Clone',
      date: 'April 18, 2025',
      excerpt: 'Developed a professional networking platform with profile creation, connections, and posts — inspired by LinkedIn, built using modern web technologies.',
      image: '/images/works/linkedin.jpg'
    },
    {
      id: 10,
      title: '📧 Gmail Clone',
      date: 'April 18, 2025',
      excerpt: 'Recreated Gmail’s core features including inbox, thread-based messages, and search, with responsive UI and real-time updates.',
      image: '/images/works/gmail.jpg'
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
          Here’s a glimpse into some of the things I’ve built — from fintech systems handling high-speed transactions to full-stack web apps and creative tools. And there’s still so much more to come." ✨
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
                  {/* <p className="work-date">{post.date}</p> */}
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
