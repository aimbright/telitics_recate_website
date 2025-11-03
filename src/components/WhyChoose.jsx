import React from 'react';
import backgroundPatternImage from '../assets/images/background-pattern.jpg';
import './WhyChoose.css';

const WhyChoose = () => {
  const benefits = {
    left: [
      {
        title: "Cloud telephony compliance in every channel",
        description: "voice, digital, self-service, IVR, or hybrid"
      },
      {
        title: "Shorten handling times",
        description: "and improve customer satisfaction"
      },
      {
        title: "Increase first contact resolution rates",
        description: "to reduce operational costs"
      },
      {
        title: "Accelerate revenue recognition",
        description: "and strengthen cash flow"
      }
    ],
    right: [
      {
        title: "Minimize compliance scope",
        description: "and reduce audit effort"
      },
      {
        title: "Use advanced analytics",
        description: "to isolate and protect communication data"
      },
      {
        title: "Fast implementation",
        description: "and integration with existing CCaaS, CRM, and platforms"
      },
      {
        title: "AI-enabled",
        description: "to future-proof your modernization initiatives"
      }
    ]
  };

  return (
    <section className="why-choose">
      {/* Background pattern image */}
      <div 
        className="why-choose-background-image"
        style={{
          backgroundImage: `url(${backgroundPatternImage})`
        }}
      />
      
      <div className="container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why choose Telitics for your cloud communication solution?</h2>
          <p className="why-choose-subtitle">Reduce cost, improve CX, maximize ROI</p>
        </div>
        
        <div className="why-choose-content">
          <div className="why-choose-column">
            {benefits.left.map((benefit, index) => (
              <div key={index} className="why-choose-item">
                <h3 className="why-choose-item-title">{benefit.title}</h3>
                <p className="why-choose-item-desc">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="why-choose-column">
            {benefits.right.map((benefit, index) => (
              <div key={index} className="why-choose-item">
                <h3 className="why-choose-item-title">{benefit.title}</h3>
                <p className="why-choose-item-desc">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

