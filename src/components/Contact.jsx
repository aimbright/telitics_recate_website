import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import supportImage from '../assets/images/support.jpg';
import './Contact.css';

const Contact = ({ onOpenForm }) => {
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
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', organization: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      {/* Background support image */}
      <div 
        className="contact-background-image"
        style={{
          backgroundImage: `url(${supportImage})`
        }}
      />
      
      <div className="contact-wrapper">
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
                <p>
                  <a href="https://www.google.com/maps/search/?api=1&query=309+KTC+Building+Madhapur+Hyderabad+500081" target="_blank" rel="noopener noreferrer">
                    #309, KTC Building, Image Hospital Road<br />
                    Gafoor Nagar, Madhapur<br />
                    Hyderabad – 500081
                  </a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+914023119433">
                    +91 40-23119433
                  </a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info.tt@telitics.com">
                    info.tt@telitics.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <FaWhatsapp className="info-icon" />
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href="https://wa.me/914023119433" target="_blank" rel="noopener noreferrer">
                    +91 40-23119433
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-buttons">
              <button className="btn btn-primary" onClick={onOpenForm}>Request a Demo</button>
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

