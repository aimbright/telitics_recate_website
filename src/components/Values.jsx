import React from 'react';
import { FaHeart, FaShieldAlt, FaLightbulb, FaHandshake } from 'react-icons/fa';
import './Values.css';

const Values = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: "Customer First",
      description: "Solutions tailored for your business goals"
    },
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      description: "Ethical and transparent service"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Cutting-edge telecom R&D"
    },
    {
      icon: <FaHandshake />,
      title: "Teamwork",
      description: "Every Telitics member acts as an owner"
    }
  ];

  return (
    <section className="values">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built Around What Matters Most — You</h2>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card card">
              <div className="card-icon">{value.icon}</div>
              <h3 className="card-title">{value.title}</h3>
              <p className="card-description">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="quote-section">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            A customer is not an interruption of our work — they are the purpose of it.
          </p>
          <p className="quote-author">— Mahatma Gandhi</p>
        </div>
      </div>
    </section>
  );
};

export default Values;

