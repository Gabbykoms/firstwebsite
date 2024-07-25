// 
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import logo from '../assets/img/Kg.dev.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo-text">
          Kg.dev
        </Navbar.Brand>
        <Nav className="ms-auto">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/gkoomson" target='_blank' rel="noopener noreferrer">
              <img src={navIcon1} alt="LinkedIn icon" />
            </a>
            <a href="https://github.com/Gabbykoms" target='_blank' rel="noopener noreferrer">
              <img src={navIcon2} alt="GitHub icon" />
            </a>
            <a href="https://www.instagram.com/gabe10f1?igsh=dDdzNWhvcm93bGx3&utm_source=qr" target='_blank' rel="noopener noreferrer">
              <img src={navIcon3} alt="Instagram icon" />
            </a>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}