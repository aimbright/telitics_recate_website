import React from 'react';
import logoImage from '../assets/images/tics1_no_bg.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content container">
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
            <button className="btn btn-primary">Book a demo</button>
            <button className="btn btn-secondary">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

