import React from 'react';
import './Memberships.css';

const Memberships = ({ organizations }) => {
  return (
    <section className="memberships">
      <h2>Fellowships & Memberships</h2>
      <div className="logo-scroll">
        <div className="logo-container">
          {organizations.map((org, index) => (
            <a 
              key={index} 
              href={org.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="logo-link"
            >
              <img src={org.logo} alt={org.name} className="org-logo" />
            </a>
          ))}
          {/* Duplicate logos for seamless scrolling */}
          {organizations.map((org, index) => (
            <a 
              key={index + organizations.length} 
              href={org.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="logo-link"
            >
              <img src={org.logo} alt={org.name} className="org-logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;