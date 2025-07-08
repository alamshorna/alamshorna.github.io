import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Home from './pages/Home'; 
import Portfolio from './pages/Portfolio';
import Notes from './pages/Notes';
import NotePage from './pages/NotePage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <Navbar /> {}

      <Routes>
        <Route path="/" element={<Home />} />  {}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:fileName" element={<NotePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;