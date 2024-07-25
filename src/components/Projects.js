import React from 'react';
import './Projects.css';
import pokee from "../assets/img/pokeeee.jpeg";
import predi from "../assets/img/predi.jpg";
import calc from "../assets/img/calc.png";
import inventory from "../assets/img/inventory.jpeg";

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
      title: "Pokedex",
      description: "This is an android based application that generates various information about a pokemon for gamers and pokemon researchers",
      technologies: ["Kotlin", "Android studio", "Pokemon API"],
      image: pokee, 
      link: "https://github.com/Codepath-AND101Group36Project/Pokedex"
    },
    {
        title: "CSurvPredictor",
        description: "In this project, I built cancer surgery survival rate prediction model under 24 hours during a data science hackathon at Georgia Tech. I used the random forest algorithm and heatmaps to achieve .781 accuracy. Still fine-tuning with hyperparameters",
        technologies: ["Kaggle", "Pytorch", "Intel GPU"],
        image: predi,
        link: "https://github.com/Gabbykoms/CancerSurgeryPredictor"

      },
      {
        title: "Simple Calculator",
        description: "This is a simple calculator app I built during my android development course. It implements viewbinding to reduce boilerplate code ",
        technologies: ["Java", "Kotlin", "Android Studio"],
        image: calc,
        link: "https://github.com/Gabbykoms/SimpleCalculator.git"

      },
      {
        title: "Product inventory",
        description: "I implemented various data structures from scratch including deques, LinkedQueue, PositionalList, DoublyLinkedlist, linkedStack, and Queues to create a program for managing inventory in a store ",
        technologies: ["Java", "DSA", "Git"],
        image: inventory,
        link: "https://github.com/Gabbykoms/Inventory.git"

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