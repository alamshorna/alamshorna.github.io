import React from 'react';
import '../styles/Portfolio.css'; 

function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* <p>I would like this page to be a landing page for the art that I do!</p> */}
      {/* <p>I have been painting for a very long time; hopefully (after the semester ends) I will turn this page into a gallery page.</p> */}
      <p>
        I'm a blogger for MIT Admissions and I also write personal essays on my Substack at&nbsp;
        <a href="https://shornaalam.substack.com" target="_blank" rel="noopener noreferrer">
          shornaalam.substack.com
        </a>.
        Aside from more creative writing, I have technical posts on this website, under the Blogs tab.
      </p>
      <p>
        In college, I did a capella and was briefly in musical theater! I am also classically trained in piano and can play the clarinet.
      </p>
      <p>
        Mostly, though, I love making visual art! Here is a small selection of pieces I've made (more pictures coming soon!)
      </p>

      <div className="portfolio-images">
        <img src="/alison.png" alt="Portfolio image" />
        <img src="/eggs.png" alt="Portfolio image" />
        <img src="/fish.png" alt="Portfolio image" />
        <img src="/frog cake.png" alt="Portfolio image" />
        <img src="/hands.png" alt="Portfolio image" />
        <img src="/pencil.jpg" alt="Portfolio image" />
        <img src="/blue pen.jpg" alt="Portfolio image" />
        <img src="/plums.png" alt="Portfolio image" />
        <img src="/self portrait.png" alt="Portfolio image" />
        <img src="/shroomguys.png" alt="Portfolio image" />
    </div>
    </div>
  );
}

export default Portfolio;