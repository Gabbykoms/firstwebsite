import React from 'react';
import './CertificationsButton.css';

const CertificationsButton = ({ link }) => {
  return (
    <div className="certifications-button-container">
      <a href={link} target="_blank" rel="noopener noreferrer" className="certifications-button">
        View My Certifications
      </a>
    </div>
  );
};

export default CertificationsButton;