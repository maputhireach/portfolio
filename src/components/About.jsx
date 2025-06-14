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
            <p>X years in web development</p>
          </div>
          <div className="about-item">
            <h3>Education</h3>
            <p>Degree in Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 