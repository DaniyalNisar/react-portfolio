import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BlogPage from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import MyWork from './components/Mywork';

export const metadata = {
  '/': [
    'Daniyal Nisar – Software Engineer | Java, Spring Boot, Fintech',
    'Portfolio of Daniyal Nisar, a Software Engineer skilled in Java, Spring Boot, and building fintech systems. Check out my projects, experience, and skills.',
  ],
  '/about': [
    'About | Daniyal Nisar Rana',
    'Background, experience, and skills of Daniyal Nisar Rana, a software engineer working with Java, Spring Boot, and fintech systems.',
  ],
  '/contact': [
    'Contact | Daniyal Nisar Rana',
    'Get in touch with Daniyal Nisar Rana about software engineering roles and projects.',
  ],
  '/blogs': [
    'Blog | Daniyal Nisar Rana',
    'Insights, tutorials, and thoughts on development, design, and tech by Daniyal Nisar Rana.',
  ],
  '/mywork': [
    'My Work | Daniyal Nisar Rana',
    'Projects and professional work by Daniyal Nisar Rana.',
  ],
};

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/mywork" element={<MyWork />} />



      </Route>
    </Routes>
   </>
  );
}

export default App;
