import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import '../styles/BlogPost.css';
import WorldMap from './WorldMap.js';

function BlogPost() {
  const { id } = useParams();  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${process.env.PUBLIC_URL}/blogs/${id}.md`);
        if (!response.ok) throw new Error('Not found');
        const text = await response.text();
        if (text.trim().startsWith('<!DOCTYPE')) throw new Error('Not found');
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

  // if the markdown for the file include the map boolean (which is only true for one of the posts, the reading around the world post)
  // then render the world map on top of the text

  if (post.map) return (
    <>
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <p className="blog-date">{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
    <div className="map-container">
        <WorldMap />
    </div>
    </>
    
  );

  return (
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <p className="blog-date">{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;

