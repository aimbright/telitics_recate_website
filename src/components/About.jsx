import React from 'react';
import { FaTrophy, FaCertificate, FaUsers, FaClock } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaTrophy />,
      text: "15+ years of telecom innovation"
    },
    {
      icon: <FaCertificate />,
      text: "US patent for 16E1/T1 Media Gateway"
    },
    {
      icon: <FaUsers />,
      text: "Trusted by enterprises, hospitals, and service providers"
    },
    {
      icon: <FaClock />,
      text: "24×7 cloud uptime and analytics"
    }
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Telitics</h2>
        </div>
        
        <div className="about-content">
          <p className="about-description">
            Founded in <strong>2009</strong>, Telitics Technologies Pvt. Ltd. delivers next-generation 
            cloud telephony and analytics solutions. We help enterprises modernize communication 
            through secure, scalable, and intelligent cloud infrastructure.
          </p>
          
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-icon">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

