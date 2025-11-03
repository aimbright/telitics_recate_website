import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Solutions from './components/Solutions';
import Enterprise from './components/Enterprise';
import Pricing from './components/Pricing';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <WhyChoose />
      <Solutions />
      <Enterprise />
      <Pricing />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

