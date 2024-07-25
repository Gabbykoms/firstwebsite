import React, { useEffect, useRef } from 'react';
import './Technologies.css';
import reacticon from '../assets/img/icons8-react-360.png';
import jsicon from '../assets/img/icons8-javascript-360.png';
import kotlinicon from '../assets/img/Kotlin.png';
import python from '../assets/img/Python.png';
import java from '../assets/img/Java.png';
import sql from '../assets/img/SQL Developer.png';
import docker from '../assets/img/Docker.png';

const Technologies = ({ Technologies = [] }) => {
  const logoRefs = useRef([]);
  const technologies = [
    { name: 'React', logo: reacticon },
    { name: 'Jsicon', logo: jsicon },
    { name: 'kotlinicon', logo: kotlinicon },
    { name: 'python', logo: python },
    { name: 'java', logo: java },
    { name: 'sql', logo: sql },
    { name: 'docker', logo: docker},
  ];
  useEffect(() => {
    logoRefs.current.forEach(logo => {
      if (logo) {
        const randomDelay = Math.random() * 3;
        const randomDuration = 2 + Math.random() * 2;
        
        logo.style.animationDelay = `${randomDelay}s`;
        logo.style.animationDuration = `${randomDuration}s`;
      }
    });
  }, []);

  return (
    <section className="technologies">
      <h2>Technologies</h2>
      <div className="tech-container">
        {Array.isArray(technologies) && technologies.map((tech, index) => (
          <img 
            key={tech.name || index}
            src={tech.logo} 
            alt={tech.name || `Technology ${index + 1}`} 
            className="tech-logo"
            ref={el => logoRefs.current[index] = el}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;