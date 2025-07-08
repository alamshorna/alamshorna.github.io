import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import '../styles/BlogPost.css';

function BlogPost() {
  const { id } = useParams();  // Get the 'id' from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await import(`../blogs/${id}.md`);
        const response = await fetch(res.default);
        const text = await response.text();
        const { data, content } = matter(text);
        setPost({ ...data, content });
      } catch (err) {
        setError("Sorry, this blog post doesn't exist.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <p className="blog-date">{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;

