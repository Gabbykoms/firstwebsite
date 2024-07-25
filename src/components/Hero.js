import React from 'react';
import './Hero.css';
import yourImage from '../assets/img/hero sec.png'; 

const Hero = () => {
  return (
    <section className="hero">
          <a href="https://drive.google.com/file/d/1EXH3t5O0ZiFLzHVTHuN0-8vuSoFbgiWy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-button">
        View Resume
      </a>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Fullstack Developer</h1>
          <p>
            Hello! I am Gabriel, a passionate fullstack developer with expertise in 
            webdev, backend, android dev. I love creating efficient, scalable, and user-friendly 
            web applications. I've worked on projects 
            ranging from prediction models, android apps, text editors with AI features. 
          </p>
        </div>
        <div className="hero-image">
          <img src={yourImage} alt="Gabriel Koomson" />
        </div>
      </div>
    </section>
  );
};

export default Hero;