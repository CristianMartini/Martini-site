// src/components/Footer.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white py-6 shadow-inner">
      <div className="container mx-auto text-center">
       
        <motion.nav
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="skills" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">
            Habilidades
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">
            Projetos
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">
            Sobre Mim
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">
            Contato
          </Link>
        </motion.nav>

        {/* Ícones de Redes Sociais */}
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://github.com/cristianmartini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/cristianmartinisp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </motion.div>

        {/* Texto de Copyright */}
        <motion.p
          className="text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; 2024 Cristian Martini. Todos os direitos reservados.
        </motion.p>

        {/* Link para Voltar ao Topo */}
        <motion.div
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="hero" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Voltar ao Topo
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
