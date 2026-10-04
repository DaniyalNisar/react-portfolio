import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import BlogPage from './components/Blogs'
import BlogDetail from './components/BlogDetail'
import MyWork from './components/Mywork'

export const metadata = {
  '/': [
    'Daniyal Nisar Rana | Backend & Payments Software Engineer',
    'Portfolio of Daniyal Nisar Rana, a software engineer focused on Java, Spring Boot, fintech payment systems, ISO 8583, performance engineering, and applied AI/ML.',
  ],
  '/about': [
    'About Daniyal Nisar Rana | Software Engineer',
    'Learn about Daniyal Nisar Rana, a backend and fintech software engineer working with Java, Spring Boot, payment systems, performance optimization, and AI/ML.',
  ],
  '/mywork': [
    'Engineering Work | Daniyal Nisar Rana',
    'Selected backend, payments, fintech, performance, and full-stack engineering work by Daniyal Nisar Rana.',
  ],
  '/blogs': [
    'Engineering Notes | Daniyal Nisar Rana',
    'Technical writing by Daniyal Nisar Rana about software engineering, caching, algorithms, JavaScript, and system design.',
  ],
  '/contact': [
    'Contact Daniyal Nisar Rana | Software Engineer',
    'Get in touch with Daniyal Nisar Rana for software engineering, backend, fintech, payments, and technology opportunities.',
  ],
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="mywork" element={<MyWork />} />
      </Route>
    </Routes>
  )
}

export default App
