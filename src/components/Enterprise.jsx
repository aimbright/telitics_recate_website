import React from 'react';
import { FaPhoneAlt, FaSms, FaUsers, FaChartLine } from 'react-icons/fa';
import './Enterprise.css';

const Enterprise = () => {
  const features = [
    {
      icon: <FaPhoneAlt />,
      title: "Inbound & Outbound Dialers",
      description: "Powerful predictive and progressive dialing systems"
    },
    {
      icon: <FaSms />,
      title: "SMS & Email Campaign Tools",
      description: "Multi-channel outreach for maximum engagement"
    },
    {
      icon: <FaUsers />,
      title: "Subscriber Retention Tools (SRT)",
      description: "Keep customers engaged and reduce churn"
    },
    {
      icon: <FaChartLine />,
      title: "Campaign Analytics Dashboard",
      description: "Real-time insights and performance metrics"
    }
  ];

  return (
    <section className="enterprise">
      <div className="container">
        <div className="enterprise-content">
          <div className="enterprise-text">
            <h2 className="section-title">Enterprise Cloud Telephony</h2>
            <h3 className="enterprise-subtitle">Secure, Scalable, Smart</h3>
            <p className="enterprise-description">
              Telitics' clustered cloud infrastructure delivers encrypted, always-on 
              communication for enterprises. Scale effortlessly while maintaining the 
              highest levels of security and reliability.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          
          <div className="enterprise-features">
            {features.map((feature, index) => (
              <div key={index} className="enterprise-feature">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;

