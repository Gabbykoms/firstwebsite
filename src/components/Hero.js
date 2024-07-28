import React from 'react';
import './Hero.css';
// import yourImage from '../assets/img/hero sec.png'; 
import yourImage from '../assets/img/gabe copy.jpeg'; 


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
            Hello! I am Gabriel, a passionate fullstack developer who also dabbles in 
            android development, cloud computing, AI/ML & data engineering. I create efficient, scalable, and user-friendly 
            applications. Ongoing & past projects 
            range from prediction models, android apps, text editors with AI features. 
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