import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 