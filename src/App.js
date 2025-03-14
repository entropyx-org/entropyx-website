import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Whitepaper from './pages/Whitepaper';
import About from './pages/About';
import Burns from './pages/Burns';
import ScrollToTop from './components/ScrollToTop';

// Import styles
import './App.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/burns" element={<Burns />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/about" element={<About />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
