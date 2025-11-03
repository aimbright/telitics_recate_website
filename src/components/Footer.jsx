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
              <a href="https://www.linkedin.com/company/telitics" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/telitics" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com/telitics" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/telitics" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
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
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=309+KTC+Building+Madhapur+Hyderabad+500081" target="_blank" rel="noopener noreferrer">
                  📍 #309, KTC Building, Madhapur
                </a>
              </li>
              <li>
                <a href="tel:+914023119433">
                  📞 +91 40-23119433
                </a>
              </li>
              <li>
                <a href="mailto:info.tt@telitics.com">
                  📧 info.tt@telitics.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/914023119433" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </li>
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

