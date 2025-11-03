import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhyChoose from './components/WhyChoose';
import Solutions from './components/Solutions';
import Enterprise from './components/Enterprise';
import Pricing from './components/Pricing';
import Values from './components/Values';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoogleFormModal from './components/GoogleFormModal';
import './App.css';

function App() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);

  return (
    <div className="App">
      <Hero onOpenForm={openFormModal} />
      <Benefits onOpenForm={openFormModal} />
      <WhyChoose />
      <Solutions />
      <Enterprise onOpenForm={openFormModal} />
      <Pricing onOpenForm={openFormModal} />
      <Values />
      <Certifications />
      <Contact onOpenForm={openFormModal} />
      <Footer />
      <GoogleFormModal isOpen={isFormModalOpen} onClose={closeFormModal} />
    </div>
  );
}

export default App;

