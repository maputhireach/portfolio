import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://github.com/maputhireach" className="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/maputhireach/" className="social-link">LinkedIn</a>
          <a href="https://www.instagram.com/mareach__/" className="social-link">Instragram</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Ma Puthireach. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 