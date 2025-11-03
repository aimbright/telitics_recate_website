import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { name: 'ISO 27001', label: 'Security Certified' },
    { name: 'PCI DSS', label: 'Payment Compliant' },
    { name: 'SOC 2', label: 'Audited & Verified' },
    { name: 'GDPR', label: 'Data Protection' },
    { name: '99.9% Uptime', label: 'SLA Guaranteed' }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="certifications-header">
          <h2 className="certifications-title">Proven security. Trusted by enterprises.</h2>
        </div>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="certification-badge">{cert.name}</div>
              <p className="certification-label">{cert.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

