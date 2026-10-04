import React from 'react';
import '../styles/Portfolio.css'; 

function Portfolio() {
  return (
    <div className="portfolio-container">
      <p>
        I'm a writer! You can read my writing on:
        <ul>
          <li>
            <a href="https://mitadmissions.org/blogs/author/shorna/" target="_blank" rel="noopener noreferrer">MIT Admissions</a>
          </li>
          <li>
            <a href="https://shornaalam.substack.com/" target="_blank" rel="noopener noreferrer">blogfrog</a>
          </li>
          <li>
            the blog tab of this website!
          </li>
        </ul>
      </p>
      <p>
        
      </p>
      <p>
        I also make visual art! You can see a small sample here:
      </p>

      <div className="portfolio-images">
        <img src="/alison.webp" alt="Portfolio image" />
        <img src="/eggs.webp" alt="Portfolio image" />
        <img src="/fish.webp" alt="Portfolio image" />
        <img src="/frog cake.webp" alt="Portfolio image" />
        <img src="/hands.webp" alt="Portfolio image" />
        <img src="/pencil.webp" alt="Portfolio image" />
        <img src="/blue pen.webp" alt="Portfolio image" />
        <img src="/plums.webp" alt="Portfolio image" />
        <img src="/self portrait.webp" alt="Portfolio image" />
        <img src="/shroomguys.webp" alt="Portfolio image" />
    </div>
    </div>
  );
}

export default Portfolio;