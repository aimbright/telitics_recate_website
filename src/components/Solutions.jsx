import React from 'react';
import { FaPhoneSlash, FaMousePointer, FaFax, FaVideo, FaExchangeAlt, FaPhone, FaRobot, FaChartBar } from 'react-icons/fa';
import callCenterImage from '../assets/images/call-center.jpg';
import clickToRingImage from '../assets/images/click-to-ring.jpg';
import faxOnMailImage from '../assets/images/fax-on-mail.jpg';
import conferenceImage from '../assets/images/conference.jpg';
import callTransferImage from '../assets/images/call_transfer_forwarding.png';
import inboundIVRImage from '../assets/images/Inbound_IVR_irtual_numbers.png';
import callAnalyticsImage from '../assets/images/call_analytics.png';
import aiVoiceBotImage from '../assets/images/ai_voice_bot.png';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: <FaPhoneSlash />,
      title: "Missed Call Management",
      description: "Never miss a customer again. Capture, alert, and route every lead instantly.",
      features: ["Smart routing", "CRM sync", "SMS/Email alerts", "Analytics"],
      image: callCenterImage
    },
    {
      icon: <FaMousePointer />,
      title: "Click-to-Ring",
      description: "One-click callback solution to boost customer engagement.",
      features: ["Instant/scheduled callbacks", "Live tracking", "No tech setup"],
      image: clickToRingImage
    },
    {
      icon: <FaFax />,
      title: "Fax on Mail (TeliFax)",
      description: "Send and receive faxes securely through email — no machines or paper.",
      features: ["Cloud faxing", "Encrypted", "24/7 access", "No hardware needed"],
      image: faxOnMailImage
    },
    {
      icon: <FaVideo />,
      title: "Call & Video Conferencing (TeliCon)",
      description: "Connect global teams with HD-quality conferencing.",
      features: ["Lock/unlock rooms", "Recording", "Video sharing", "Global dial-in"],
      image: conferenceImage
    },
    {
      icon: <FaExchangeAlt />,
      title: "Call Transfer & Forwarding",
      description: "Forward calls to available agents or teams automatically.",
      features: ["Time/priority routing", "Easy setup", "No downtime"],
      image: callTransferImage
    },
    {
      icon: <FaPhone />,
      title: "Inbound IVR & Virtual Numbers",
      description: "Delight customers with automated, personalized call flows.",
      features: ["Auto-attendant", "Text-to-speech", "API integration", "Analytics"],
      image: inboundIVRImage
    },
    {
      icon: <FaRobot />,
      title: "AI Voice Bot",
      description: "Intelligent AI-powered voice assistants for automated customer interactions.",
      features: ["Natural language processing", "24/7 availability", "Multi-language support", "Seamless integration"],
      image: aiVoiceBotImage
    },
    {
      icon: <FaChartBar />,
      title: "Call Analytics",
      description: "Comprehensive analytics and insights for all your communication data.",
      features: ["Real-time dashboards", "Performance metrics", "Data visualization", "Custom reports"],
      image: callAnalyticsImage
    }
  ];

  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-subtitle">
            Comprehensive cloud telephony features designed for modern businesses
          </p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card card">
              {solution.image && (
                <div className="solution-image-wrapper">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="solution-image"
                  />
                </div>
              )}
              <h3 className="card-title">{solution.title}</h3>
              <p className="card-description">{solution.description}</p>
              <ul className="features-list">
                {solution.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

