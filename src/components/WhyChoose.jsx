import React from 'react';
import { FaCloud, FaClock, FaChartBar, FaHeadset, FaDollarSign } from 'react-icons/fa';
import './WhyChoose.css';

const WhyChoose = () => {
  const reasons = [
    {
      icon: <FaCloud />,
      title: "Fully Managed Cloud Platform",
      description: "Complete cloud infrastructure managed by experts so you can focus on your business."
    },
    {
      icon: <FaClock />,
      title: "Rapid Setup, No Hardware",
      description: "Get started in minutes with zero hardware investment or technical complexity."
    },
    {
      icon: <FaChartBar />,
      title: "Real-Time Analytics and Reporting",
      description: "Data-driven insights with live dashboards to track every call and campaign."
    },
    {
      icon: <FaHeadset />,
      title: "24×7 Support",
      description: "Round-the-clock technical support to keep your operations running smoothly."
    },
    {
      icon: <FaDollarSign />,
      title: "Affordable, Scalable Plans",
      description: "Flexible pricing that grows with your business, from startups to enterprises."
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Businesses Choose Telitics</h2>
          <p className="section-subtitle">
            The most reliable cloud telephony platform for modern businesses
          </p>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card card">
              <div className="card-icon">{reason.icon}</div>
              <h3 className="card-title">{reason.title}</h3>
              <p className="card-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

