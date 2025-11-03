import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import logoImage from '../assets/images/tics1.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logoImage} alt="Telitics Logo" className="footer-logo" />
            <h3 className="footer-title">Telitics Technologies</h3>
            <p className="footer-description">
              Leading cloud telephony and analytics solutions provider since 2009.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links">
              <li><a href="#solutions">Missed Call Management</a></li>
              <li><a href="#solutions">Click-to-Ring</a></li>
              <li><a href="#solutions">TeliFax</a></li>
              <li><a href="#solutions">TeliCon</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">API Documentation</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-links">
              <li>📍 #309, KTC Building, Madhapur</li>
              <li>📞 +91 40-23119433</li>
              <li>📧 info.tt@telitics.com</li>
              <li>🌐 www.telitics.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright© {currentYear} Telitics. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="https://aimbright.in/" target="_blank" rel="noopener noreferrer">Built by Aimbright.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

