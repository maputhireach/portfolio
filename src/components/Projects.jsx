import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce platform built with React, featuring product listings, shopping cart, and user authentication.",
    image: "/images/ec.png",
    demoLink: "https://ecommerce-blond-phi-55.vercel.app/",
    githubLink: "https://github.com/maputhireach",
    technologies: ["React", "CSS", "JavaScript", "HTML"]
  },
  {
    id: 2,
    title: "AI Demos",
    description: "Speech Transcriber (Khmer/English), Text Summarizer, and Image Classifier using TF.js MobileNet – all running in-browser.",
    image: "/images/ai.png",
    demoLink: "https://ai-demos-ecru.vercel.app/",
    githubLink: "https://github.com/maputhireach",
    technologies: ["TensorFlow.js", "JavaScript", "Web APIs"]
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const ProjectCard = ({ project }) => {
    const isHovered = hoveredProject === project.id;

    return (
      <div 
        className="project-card"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open demo for ${project.title}`}
          className="project-image-link"
        >
          <div className="project-image-container">
            <img 
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
              style={{
                filter: isHovered ? 'blur(0)' : 'blur(4px)',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
              onError={(e) => {
                console.error('Image failed to load:', project.image);
                e.target.style.display = 'none';
              }}
            />
            <div className="project-overlay" style={{ opacity: isHovered ? 0 : 1 }} />
          </div>
        </a>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-technologies">
            {project.technologies.map((tech) => (
              <span key={`${project.id}-${tech}`} className="technology-tag">{tech}</span>
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
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 