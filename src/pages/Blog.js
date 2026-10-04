import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import '../styles/Blog.css';

const blogFiles = [
  "paper1.md",
  "paper2.md",
];

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all(
      blogFiles.map((file) =>
        fetch(`${process.env.PUBLIC_URL}/blogs/${file}`)
          .then((res) => {
            if (!res.ok) throw new Error(`Couldn't load ${file}`);
            return res.text();
          })
          .then((text) => {
            const { data, content } = matter(text);
            return { ...data, content, slug: file.replace('.md', '') };
          })
          .catch((err) => {
            console.error(err);
            return null;
          })
      )
    ).then((results) => {
      setPosts(results.filter(Boolean));
    });
  }, []);

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="blog-entry">
          <div className="blog-title">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </div>
          <div className="blog-summary">{post.summary}</div>
          <div className="blog-date">{String(post.date)}</div>
        </div>
      ))}
    </div>
  );
}

export default Blog;