import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', organization: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Let's discuss how Telitics can transform your business communication
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>#309, KTC Building, Image Hospital Road<br />
                Gafoor Nagar, Madhapur<br />
                Hyderabad – 500081</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 40-23119433</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>info.tt@telitics.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaGlobe className="info-icon" />
              <div>
                <h4>Website</h4>
                <p>www.telitics.com</p>
              </div>
            </div>
            
            <div className="contact-buttons">
              <button className="btn btn-primary">Request a Demo</button>
              <button className="btn btn-secondary">Locate on Map</button>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

