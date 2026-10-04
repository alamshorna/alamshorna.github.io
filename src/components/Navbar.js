import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Make sure to import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="home-link">
          <img 
            src="/strawby.webp" 
            alt="Substack" 
            style=
            {{
              width: '80px',
              height: '80px'
            }}
          />
        </Link>
        <div className="navbar-links">
          
          <Link to="/portfolio">Art</Link>
          <Link to="/blog">Blog</Link>

          <Link to="/notes">Notes</Link>
          <Link to="/publications">Publications</Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;