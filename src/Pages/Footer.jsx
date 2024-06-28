// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer--section">
      <div className="footer--content">
        <p className="footer--copyright">
          &copy; 2024 Kedarnath Tripathi. All rights reserved.
        </p>
        <div className="footer--contact-me">
        <p>Contact Me</p>
      </div>
        <div className="footer--social-icons">
          <a href="https://www.instagram.com/kedar_tripathi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/kedartripathi30101999" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kedarnath-tripathi-4a5177225" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer--quick-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
