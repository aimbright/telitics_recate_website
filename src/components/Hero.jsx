import React from 'react';
import { FaCloud, FaChartLine } from 'react-icons/fa';
import logoImage from '../assets/images/tics1_no_bg.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-logo">
            <img src={logoImage} alt="Telitics Logo" className="logo-image" />
          </div>
          
          <h1 className="hero-title fade-in">
            Grow Your Business with <br />
            <span className="highlight">Cloud Telephony & Analytics</span>
          </h1>
          
          <p className="hero-subtitle fade-in">
            Empower your business to connect anywhere, anytime with secure, 
            intelligent cloud-based communication from Telitics.
          </p>
          
          <div className="hero-cta fade-in">
            <button className="btn btn-primary">Request a Demo</button>
            <button className="btn btn-secondary">Explore Solutions</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <FaCloud size={40} color="#00AEEF" />
            <h3>Cloud Based</h3>
            <p>99.9% Uptime</p>
          </div>
          <div className="floating-card card-2">
            <FaChartLine size={40} color="#00AEEF" />
            <h3>Real-Time Analytics</h3>
            <p>Data-Driven Insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

