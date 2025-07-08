import React from 'react';
import '../styles/Portfolio.css'; 

function Portfolio() {
  return (
    <div className="portfolio-container">
      <p>I would like this page to be a landing page for the art that I do!</p>
      <p>I have been painting for a very long time; hopefully (after the semester ends) I will turn this page into a gallery page.</p>
      <p>
        I am a blogger for MIT Admissions and I also write personal essays on my Substack at&nbsp;
        <a href="https://shornaalam.substack.com" target="_blank" rel="noopener noreferrer">
          shornaalam.substack.com
        </a>.
        Aside from more creative writing, I have technical posts on this website, under the Blogs tab.
      </p>
      <p>
        In college, I did a capella and was briefly in musical theater! I am also classically trained in piano and can play the clarinet.
      </p>
    </div>
  );
}

export default Portfolio;