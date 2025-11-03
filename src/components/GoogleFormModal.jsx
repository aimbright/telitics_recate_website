import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './GoogleFormModal.css';

const GoogleFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="google-form-modal-overlay" onClick={onClose}>
      <div className="google-form-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="google-form-modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        <div className="google-form-modal-body">
          <iframe
            src="https://forms.gle/Jy3jFxuXMtY8uZVy8"
            title="Telitics Contact Form"
            className="google-form-iframe"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleFormModal;

