import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hello! I'm a web developer passionate about creating beautiful and functional websites.
          I love working with modern technologies and am always eager to learn new things.
        </p>
        <div className="about-details">
          <div className="about-item">
            <h3>Experience</h3>
            <ul className="about-list">
              <li>Built a variety of websites and web apps to sharpen my skills and explore different areas of development, including:</li>
              <ul className="about-sublist">
                <li>E-commerce websites with product listings, shopping carts, and login systems</li>
                <li>Portfolio websites to showcase personal or client work</li>
                <li>Online tools like calculators and converters</li>
                <li>AI-based projects using web technologies combined with AI APIs or logic</li>
              </ul>
            </ul>
          </div>
          <div className="about-item">
            <h3>Education</h3>
            <ul className="about-list">
              <li>Bachelor’s in Management Information System (MIS), SETEC Institute (2024 - expected 2027)</li>
              <li>Self-taught and online learning (YouTube, etc.)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 