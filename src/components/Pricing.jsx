import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      features: ["3 extensions", "1 concurrent call", "30-day logs"],
      idealFor: "Startups",
      popular: false
    },
    {
      name: "Standard",
      features: ["5 extensions", "2 concurrent calls", "90-day logs"],
      idealFor: "SMEs",
      popular: true
    },
    {
      name: "Customized",
      features: ["Unlimited extensions", "Custom CLIs", "Full analytics"],
      idealFor: "Enterprises",
      popular: false
    },
    {
      name: "Pay-As-You-Go",
      features: ["Flexible usage", "Web interface", "Long data validity"],
      idealFor: "On-demand",
      popular: false
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Flexible Pricing for Every Business</h2>
          <p className="section-subtitle">
            Choose the plan that fits your needs — or we'll build one for you
          </p>
          <div className="special-offer">
            💡 Special Offer: 5% discount on annual plans
          </div>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-ideal">Ideal for {plan.idealFor}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary">Choose Plan</button>
            </div>
          ))}
        </div>
        
        <div className="pricing-cta">
          <p>Need a custom solution?</p>
          <button className="btn btn-secondary">Talk to Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

