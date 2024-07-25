import React from 'react';
import './Footer.css';

const Footer = () => {
    console.log('Footer component rendered');

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: gabrielkson15@gmail.com</p>
          <p>Location: Hartford, CT, USA</p>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Kg.dev. All rights reserved.</p>
          <div className="logo">Kg.dev</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;