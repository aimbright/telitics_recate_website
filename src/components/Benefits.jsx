import React from 'react';
import { FaUserTie, FaUsers } from 'react-icons/fa';
import './Benefits.css';

const Benefits = () => {
  return (
    <>
      <section className="benefits-section agent-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-visual">
              <div className="benefits-icon">
                <FaUserTie />
              </div>
            </div>
            <div className="benefits-text">
              <h2 className="benefits-title">Better experience for agents</h2>
              <p className="benefits-description">
                Telitics enhances agent experience by streamlining cloud telephony operations, 
                securing communications, and enabling omnichannel support.
              </p>
              <p className="benefits-description">
                Agents can handle multiple channels with less manual effort, fewer escalations, 
                and improved KPIs. With flexible communication options and end-to-end visibility, 
                Telitics empowers teams to deliver faster, safer, and more efficient customer interactions.
              </p>
              <button className="btn btn-secondary">View solutions</button>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section customer-benefits">
        <div className="container">
          <div className="benefits-content reverse">
            <div className="benefits-visual">
              <div className="benefits-icon">
                <FaUsers />
              </div>
            </div>
            <div className="benefits-text">
              <h2 className="benefits-title">Better experience for customers</h2>
              <p className="benefits-description">
                Telitics revolutionizes customer experience by enabling secure, real-time 
                communication across every channel.
              </p>
              <p className="benefits-description">
                Our simplified voice, digital, and IVR solutions reduce handling times and 
                enhance first contact resolution. The outcome? Seamless, channel-of-choice 
                transactions that drive higher CSAT scores and stronger KPIs.
              </p>
              <button className="btn btn-secondary">View solutions</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;

