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

        {/* <div
        style={{ flex: 1, textAlign: 'center' }}
        >
          <img
          src="/headshot.png"
          alt="Profile"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          />

          <div 
            style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px'}}
          >
            <a href="mailto:alam.shorna@gmail.com" title="Email"><FaGoogle size={28} /></a>
            <a href="https://github.com/alamshorna" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub size={28} /></a>
            <a href="https://www.linkedin.com/in/shorna-alam-10032b221/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin size={28} /></a>
            <a href="https://scholar.google.com/citations?user=BbZUBfYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar"><FaGraduationCap size={28} /></a>
            <a href="https://shornaalam.substack.com" target="_blank" rel="noopener noreferrer"> 
              <img 
                src="/substack.png" 
                alt="Substack" 
                style=
                {{
                  width: '28px',
                  height: '28px',
                  filter: 'grayscale(100%) brightness(0) invert(0)',
                }}
              /></a>
          </div>

        </div> */}

        <div className="home-container">
            <div className="name-paragraph">
              <p style={{ position: 'relative' }}>
                Hi, I'm Shorna! 
                <img
                  src="/waving_shorna.png" 
                  alt="Waving Shorna" 
                  className="waving-image"
                />
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', marginTop: '15px'}}>
                <a href="mailto:alam.shorna@gmail.com" title="Email"><FaGoogle size={28} /></a>
                <a href="https://github.com/alamshorna" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub size={28} /></a>
                <a href="https://www.linkedin.com/in/shorna-alam-10032b221/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin size={28} /></a>
                <a href="https://scholar.google.com/citations?user=BbZUBfYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar"><FaGraduationCap size={28} /></a>
                <a href="https://shornaalam.substack.com" target="_blank" rel="noopener noreferrer"> 
                  <img 
                    src="/substack.png" 
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
              I'm a senior at MIT, majoring in Computer Science and minoring in Biology. I'm broadly interested in solving difficult problems
              at the intersection of deep learning and the life sciences.
            </p>
            <p>
              Currently, I'm an undergraduate researcher in the Liu Lab at the Ragon Institute. Previously, I've worked on the ML Research team at Genesis Therapeutics, 
              in the formal verification department at NVIDIA, at the Berger Lab at MIT CSAIL, and in the oncology department at the John Hopkins School of Medicine.
            </p>
            <p>
              Aside from my research interests, I enjoy making art (of many types), weightlifting, and spending time with my pet rabbit.
            </p>
        </div>
      </div>
      <div className="home-images">
        <img src="/deer.jpeg" alt="Eggs" />
        <img src="/frog stack.jpeg" alt="apples" />
        <img src="/halloween.png" alt="feet" />
        <img src="/bunny.png" alt="Eggs" />
        <img src="/friends.png" alt="Selfie" />
      </div>
    </div>
  );
}

export default Home;