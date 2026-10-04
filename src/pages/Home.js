import React from 'react';
import '../styles/Home.css'; 
import { FaGithub, FaLinkedin, FaGraduationCap, FaGoogle } from 'react-icons/fa';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      <div 
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0 5%',
        boxSizing: 'border-box',
      }}
      >

        <div className="home-container">
            <div className="name-paragraph">
              <p style={{ 
                position: 'relative' , 
                fontSize: '30px',
              }}>
                Hi, I'm Shorna! 
                {/* <img
                  src="/waving_shorna.webp" 
                  alt="Waving Shorna" 
                  className="waving-image"
                /> */}
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', marginTop: '15px'}}>
                <a href="mailto:alam.shorna@gmail.com" title="Email"><FaGoogle size={28} /></a>
                <a href="https://github.com/alamshorna" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub size={28} /></a>
                <a href="https://www.linkedin.com/in/shorna-alam-10032b221/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin size={28} /></a>
                <a href="https://scholar.google.com/citations?user=BbZUBfYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar"><FaGraduationCap size={28} /></a>
                <a href="https://shornaalam.substack.com" target="_blank" rel="noopener noreferrer"> 
                  <img 
                    src="/substack.webp" 
                    alt="Substack" 
                    style=
                    {{
                      width: '28px',
                      height: '28px',
                      filter: 'grayscale(100%) brightness(0) invert(0)',
                    }}
                  /></a>
              </div>
            </div>
            <p>
              I'm a master's student in CS at MIT. I do 
               <span className="hl">
                <mark> computational biology </mark>
                <span className="aside">(deep learning for immunology)</span>
              </span>
              research!
            </p>
            <p>
              Currently, I work in the Liu Lab at the Ragon Institute. Previously, I worked as:
            </p>
            <ul>
              <li>
                  an ML Research Engineering Intern at 
                  <span className="hl">
                <mark> Genesis Therapeutics </mark>
                <span className="aside">(now Genesis Molecular AI)</span>
              </span> 
              </li>
              <li>
                  a Formal Verification Intern at NVIDIA
              </li>
              <li>
                  a UROP in the Berger Lab at MIT CSAIL
              </li>
              <li>
                  a high school student at JHU School of Medicine
              </li>
            </ul>
            <p>
              I enjoy making art, weightlifting, and spending time with my rabbit.
            </p>
        </div>
      </div>
      <div className="home-images">
        <img src="/deer.webp" alt="Eggs" />
        <img src="/frog stack.webp" alt="apples" />
        <img src="/halloween.webp" alt="feet" />
        <img src="/bunny.webp" alt="Eggs" />
        <img src="/friends.webp" alt="Selfie" />
      </div>
    </div>
  );
}

export default Home;