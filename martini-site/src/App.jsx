// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutEducationExperience from './components/AboutEducationExperience';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="mt-16">
        <Hero />
        <Skills />
       
        <Projects />
        <About />
        <AboutEducationExperience /> {/* Renderização do novo componente */}
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
