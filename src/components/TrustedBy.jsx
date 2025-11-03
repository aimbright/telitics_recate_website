import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  // You can add actual customer logos here
  const customers = [
    { name: 'Enterprise Client 1' },
    { name: 'Enterprise Client 2' },
    { name: 'Enterprise Client 3' },
    { name: 'Enterprise Client 4' },
    { name: 'Enterprise Client 5' },
    { name: 'Enterprise Client 6' },
  ];

  return (
    <section className="trusted-by">
      <div className="container">
        <p className="trusted-by-label">Trusted by global enterprises</p>
        <div className="customer-logos">
          {customers.map((customer, index) => (
            <div key={index} className="customer-logo">
              <span>{customer.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

