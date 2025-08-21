import React, { useState, useEffect } from 'react';

const BeerBotLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dark-theme">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <span className="gold-text">Beer</span>Bot 
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#features">Features</a>
            <a href="#how-it-works">Technology</a>
            <a href="#pricing">Models</a>
            <a href="#contact">Contact</a>
          </div>
          <button 
            className="hamburger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              The Future of <span className="gold-text">Beer Dispensing</span>
            </h1>
            <p className="subtitle">
              Automated precision pouring with perfect head every time. 
              Commercial-grade technology for bars, restaurants, and home use.
            </p>
            <div className="cta-buttons">
              <button className="primary-button">Request Demo</button>
              <button className="secondary-button">Spec Sheet</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="beer-tower">
              <div className="machine-base"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>
            <span className="gold-text">Smart</span> Pouring Technology
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon gold-text">⚡</div>
              <h3>Precision Dispensing</h3>
              <p>0.1oz accuracy with adjustable pour rates for perfect head creation every time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon gold-text">🌡️</div>
              <h3>Temperature Control</h3>
              <p>Maintains ideal serving temperature (34-38°F) with our cooling system.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon gold-text">📊</div>
              <h3>Usage Analytics</h3>
              <p>Tracks consumption patterns and inventory through our dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>
            How <span className="gold-text">BeerBot PRO</span> Works
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-number gold-text">1</div>
              <div className="step-content">
                <h3>Keg Connection</h3>
                <p>Standard couplers connect to any commercial or homebrew keg.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number gold-text">2</div>
              <div className="step-content">
                <h3>Smart Dispensing</h3>
                <p>RFID or app-controlled dispensing with precise flow control.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number gold-text">3</div>
              <div className="step-content">
                <h3>Perfect Pour</h3>
                <p>Automatically stops when optimal fill level and head are achieved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="logo">
                <span className="gold-text">Beer</span>Bot
              </div>
              <p>Precision automated beer dispensing systems for professionals and enthusiasts.</p>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#features">Technology</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#pricing">Models</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>info@justblr.com</li>
                <li></li>
                <li>Dheena Complex, Brigade Road, Bangalore</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} XORIT NXT LLP. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="gold-text">Instagram</a>
              <a href="#" className="gold-text">LinkedIn</a>
              <a href="#" className="gold-text">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeerBotLanding;
