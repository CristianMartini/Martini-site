// src/App.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutEducationExperience from './components/AboutEducationExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="mt-16">
        {/* Conteúdo das seções */}
        <Hero />
        <Skills />
        <Projects />
        <About />
        <AboutEducationExperience />
        <Contact />
      </main>
      <Footer />

      {showButton && (
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <FaArrowUp size={20} />
        </Link>
      )}
    </div>
  );
}

export default App;
