import React from 'react';
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
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Benefits />
      <WhyChoose />
      <Solutions />
      <Enterprise />
      <Pricing />
      <Values />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

