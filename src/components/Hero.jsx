import React from 'react';
import Navbar from './Navbar';
import heroImage from '../assets/images/hero-image.png';
import './Hero.css';

const Hero = ({ onOpenForm }) => {
  return (
    <section id="hero" className="hero">
      {/* Background hero image */}
      <div 
        className="hero-background-image"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />
      
      {/* Navbar inside hero section */}
      <Navbar onOpenForm={onOpenForm} />
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Effortless, compliant communication <br />
            in every channel.
          </h1>
          
          <p className="hero-subtitle">
            Empower your business to connect anywhere, anytime with secure, 
            intelligent cloud-based telephony and analytics from Telitics.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={onOpenForm}>Book a demo</button>
            <button className="btn btn-secondary" onClick={onOpenForm}>Learn more</button>
          </div>
        </div>
        
        {/* Hero image on the right */}
        <div className="hero-image-container">
          <img 
            src={heroImage} 
            alt="Professional using Telitics cloud telephony platform" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

