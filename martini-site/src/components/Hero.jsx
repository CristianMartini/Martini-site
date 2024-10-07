// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-20 flex items-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        {/* Coluna de Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Cristian Martini
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-blue-300 mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Desenvolvedor Web Full-Stack
          </motion.h2>
          <motion.p
            className="text-md md:text-lg text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Transformando ideias em soluções digitais inovadoras. Especializado em desenvolvimento web com experiência em front-end e back-end.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors"
            >
              Meus Projetos
            </a>
            <a
              href="#contact"
              className="border border-white hover:border-blue-600 text-white px-6 py-3 rounded-full transition-colors"
            >
              Contate-me
            </a>
          </motion.div>
        </div>

        {/* Coluna de Imagem */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <motion.img
            src="/assets/images/cristian-photo.png" // Substitua pelo caminho da sua foto
            alt="Cristian Martini"
            className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
