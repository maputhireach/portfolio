import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="profile-picture-container">
          <img 
            src="/images/photo_2_2025-06-13_18-12-15.jpg" 
            alt="Ma Puthireach" 
            className="profile-picture"
          />
        </div>
        <h1>Welcome to My Portfolio</h1>
        <p>I build websites that are fast, accessible, and a fun to use.</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero; 