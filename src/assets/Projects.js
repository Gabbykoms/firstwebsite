import React from 'react';
import './Projects.css';

const Project = ({ title, description, technologies, image, link }) => (
  <div className="project">
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
    <div className="project-details">
      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>

      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="technology">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a description of Project 1. It explains what the project is about and its key features.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/path/to/project1-image.jpg", 
      link: "https://github.com/Gabbykoms/SimpleCalculator.git"
    },
    {
        title: "Project 2",
        description: "This is a description of Project 1. It explains what the project is about and its key features.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "/path/to/project1-image.jpg",
        link: "https://github.com/Gabbykoms/SimpleCalculator.git"

      },
      {
        title: "Project 3",
        description: "This is a description of Project 1. It explains what the project is about and its key features.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "/path/to/project1-image.jpg",
        link: "https://github.com/Gabbykoms/SimpleCalculator.git"

      },
      {
        title: "Project 4",
        description: "This is a description of Project 1. It explains what the project is about and its key features.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "/path/to/project1-image.jpg",
        link: "https://github.com/Gabbykoms/SimpleCalculator.git"

      },
    // Add more projects as needed
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;