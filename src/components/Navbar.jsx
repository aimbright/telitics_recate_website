import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logoImage from '../assets/images/tics1_no_bg.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
            <img src={logoImage} alt="Telitics Logo" className="logo-image" />
          </a>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-item dropdown" onMouseEnter={() => setOpenDropdown('solutions')} onMouseLeave={() => setOpenDropdown(null)}>
            <a href="#solutions" className="navbar-link" onClick={(e) => {
              if (window.innerWidth <= 968) {
                e.preventDefault();
                setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions');
              } else {
                handleNavClick(e, '#solutions');
              }
            }}>
              Solutions <FaChevronDown className="dropdown-icon" />
            </a>
            <div className={`dropdown-menu ${openDropdown === 'solutions' ? 'active' : ''}`}>
              <a href="#solutions" className="dropdown-item" onClick={(e) => handleNavClick(e, '#solutions')}>Overview</a>
              <a href="#solutions" className="dropdown-item" onClick={(e) => handleNavClick(e, '#solutions')}>Voice</a>
              <a href="#solutions" className="dropdown-item" onClick={(e) => handleNavClick(e, '#solutions')}>Digital</a>
              <a href="#solutions" className="dropdown-item" onClick={(e) => handleNavClick(e, '#solutions')}>IVR</a>
            </div>
          </div>
          
          <a href="#enterprise" className="navbar-link" onClick={(e) => handleNavClick(e, '#enterprise')}>Enterprise</a>
          <a href="#pricing" className="navbar-link" onClick={(e) => handleNavClick(e, '#pricing')}>Pricing</a>
          
          <div className="navbar-item dropdown" onMouseEnter={() => setOpenDropdown('about')} onMouseLeave={() => setOpenDropdown(null)}>
            <a href="#about" className="navbar-link" onClick={(e) => {
              if (window.innerWidth <= 968) {
                e.preventDefault();
                setOpenDropdown(openDropdown === 'about' ? null : 'about');
              } else {
                handleNavClick(e, '#about');
              }
            }}>
              About <FaChevronDown className="dropdown-icon" />
            </a>
            <div className={`dropdown-menu ${openDropdown === 'about' ? 'active' : ''}`}>
              <a href="#about" className="dropdown-item" onClick={(e) => handleNavClick(e, '#about')}>About</a>
              <a href="#certifications" className="dropdown-item" onClick={(e) => handleNavClick(e, '#certifications')}>Certifications</a>
              <a href="#contact" className="dropdown-item" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
            </div>
          </div>
          
          <a href="#contact" className="navbar-link" onClick={(e) => handleNavClick(e, '#contact')}>Support</a>
        </div>
        
        <div className="navbar-actions">
          <button className="btn btn-primary">Book a demo</button>
        </div>
        
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

