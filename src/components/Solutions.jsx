import React from 'react';
import { FaPhoneSlash, FaMousePointer, FaFax, FaVideo, FaExchangeAlt, FaPhone } from 'react-icons/fa';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: <FaPhoneSlash />,
      title: "Missed Call Management",
      description: "Never miss a customer again. Capture, alert, and route every lead instantly.",
      features: ["Smart routing", "CRM sync", "SMS/Email alerts", "Analytics"]
    },
    {
      icon: <FaMousePointer />,
      title: "Click-to-Ring",
      description: "One-click callback solution to boost customer engagement.",
      features: ["Instant/scheduled callbacks", "Live tracking", "No tech setup"]
    },
    {
      icon: <FaFax />,
      title: "Fax on Mail (TeliFax)",
      description: "Send and receive faxes securely through email — no machines or paper.",
      features: ["Cloud faxing", "Encrypted", "24/7 access", "No hardware needed"]
    },
    {
      icon: <FaVideo />,
      title: "Call & Video Conferencing (TeliCon)",
      description: "Connect global teams with HD-quality conferencing.",
      features: ["Lock/unlock rooms", "Recording", "Video sharing", "Global dial-in"]
    },
    {
      icon: <FaExchangeAlt />,
      title: "Call Transfer & Forwarding",
      description: "Forward calls to available agents or teams automatically.",
      features: ["Time/priority routing", "Easy setup", "No downtime"]
    },
    {
      icon: <FaPhone />,
      title: "Inbound IVR & Virtual Numbers",
      description: "Delight customers with automated, personalized call flows.",
      features: ["Auto-attendant", "Text-to-speech", "API integration", "Analytics"]
    }
  ];

  return (
    <section className="solutions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-subtitle">
            Comprehensive cloud telephony features designed for modern businesses
          </p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card card">
              <div className="card-icon">{solution.icon}</div>
              <h3 className="card-title">{solution.title}</h3>
              <p className="card-description">{solution.description}</p>
              <ul className="features-list">
                {solution.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

