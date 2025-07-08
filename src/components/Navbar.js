import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Make sure to import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="home-link">
          <img 
            src="/strawby.png" 
            alt="Substack" 
            style=
            {{
              width: '100px',
              height: '100px'
            }}
          />
        </Link>
        <div className="navbar-links">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;