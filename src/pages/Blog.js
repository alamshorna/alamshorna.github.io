import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import '../styles/Blog.css';

const blogFiles = [
    // 'learning-CUDA.md',
];

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Loop through blog filenames and read content from each Markdown file
    Promise.all(
      blogFiles.map((file) => 
        import(`../blogs/${file}`)
          .then((res) => fetch(res.default))  // Fetch the file
          .then((res) => res.text())          // Get the raw text
          .then((text) => {
            // Parse front matter and markdown content
            const { data, content } = matter(text);
            return { ...data, content };
          })
      )
    ).then((posts) => {
      setPosts(posts);  // Set the parsed posts
    });
  }, []);

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>
            <Link to={`/blog/${blogFiles[index].replace('.md', '')}`}>{post.title}</Link>
          </h2>
          <p className="blog-date">{post.date}</p>
          <p>{post.content.slice(0, 100)}...</p> {/* Show a preview of the content */}
        </div>
      ))}
    </div>
  );
}

export default Blog;
