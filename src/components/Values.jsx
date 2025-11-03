import React, { useState, useEffect } from 'react';
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

  const testimonials = [
    {
      quote: "A customer is not an interruption of our work — they are the purpose of it.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "The goal as a company is to have customer service that is not just the best, but legendary.",
      author: "Sam Walton"
    },
    {
      quote: "Quality in a service or product is not what you put into it. It is what the client or customer gets out of it.",
      author: "Peter Drucker"
    },
    {
      quote: "Your most unhappy customers are your greatest source of learning.",
      author: "Bill Gates"
    },
    {
      quote: "The customer's perception is your reality.",
      author: "Kate Zabriskie"
    },
    {
      quote: "Make customers the hero of your story.",
      author: "Ann Handley"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000); // Change every 8 seconds for very slow scroll

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
        
        <div className="testimonials-wrapper">
          <div className="testimonials-container">
            <div 
              className="testimonials-slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="quote-section">
                  <div className="quote-mark">"</div>
                  <p className="quote-text">
                    {testimonial.quote}
                  </p>
                  <p className="quote-author">— {testimonial.author}</p>
                </div>
              ))}
            </div>
            
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

