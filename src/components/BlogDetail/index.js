import { useParams, useNavigate } from 'react-router-dom';
import './index.scss'; // optional styling
import { useEffect } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Why I Built This Portfolio',
    date: 'April 28, 2025',
    content: 'This is the full content of the blog post explaining why I built the portfolio...'
  },
  {
    id: 2,
    title: 'Working with React and SCSS',
    date: 'April 25, 2025',
    content: 'Here is a deeper look at SCSS + React synergy...'
  },
  {
    id: 3,
    title: 'Tips for Clean JavaScript Code',
    date: 'April 20, 2025',
    content: 'Some practical JavaScript tips that will improve code readability...'
  },
  {
    id: 4,
    title: 'Designing for Developers',
    date: 'April 18, 2025',
    content: 'Discussion about design thinking for developer-focused products...'
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((b) => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return <div style={{ padding: '2rem', color: 'red' }}>Blog not found</div>;
  }

  return (
    <div className="container blog-detail-page">
      <h1>{blog.title}</h1>
      <p className="blog-date">{blog.date}</p>
      <p className="blog-content">{blog.content}</p>
      <button onClick={() => navigate(-1)} className="go-back">← Go Back</button>
    </div>
  );
};

export default BlogDetail;
