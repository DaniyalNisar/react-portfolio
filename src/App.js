import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BlogPage from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import MyWork from './components/Mywork';


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
