import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A modern e-commerce platform built with React, featuring product listings, shopping cart, and user authentication.",
      image: "/img/Screenshot 2025-06-14 162847.png",
      demoLink: "https://maputhireach.github.io/e-commerce/",
      githubLink: "https://github.com/maputhireach/e-commerce",
      technologies: ["React", "CSS", "JavaScript", "HTML"]
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of project 2",
      image: "path-to-project2-image",
      demoLink: "#",
      githubLink: "#",
      technologies: ["Technology 1", "Technology 2"]
    }
  ];

  const ProjectCard = ({ project }) => {
    const isHovered = hoveredProject === project.id;

    return (
      <div 
        className="project-card"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="project-image-container">
          <img 
            src={project.image}
            alt={project.title}
            className="project-image"
            style={{
              filter: isHovered ? 'blur(0)' : 'blur(4px)',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              console.error('Image failed to load:', project.image);
              e.target.style.display = 'none';
            }}
          />
          <div className="project-overlay" style={{ opacity: isHovered ? 0 : 1 }} />
        </div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="technology-tag">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            <a 
              href={project.demoLink} 
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
            <a 
              href={project.githubLink} 
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p className="projects-intro">
          Here are some of my recent projects. Hover over them to see more details.
        </p>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 