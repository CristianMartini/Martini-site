// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Carregar preferência do modo escuro do localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="fixed w-full z-50 bg-blue-900 dark:bg-gray-900 text-white shadow-md top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Nome do Site */}
        <h1 className="text-2xl font-bold">Cristian Martini</h1>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex space-x-6">
          
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
        </nav>
        

        {/* Ícones do Lado Direito */}
        <div className="flex items-center space-x-4">
          {/* Botões de GitHub e LinkedIn */}
          <a
            href="https://github.com/seu-usuario" // Substitua "seu-usuario" pelo seu usuário do GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/cristianmartini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          {/* Botão de Modo Escuro */}
          <button onClick={toggleDarkMode} aria-label="Alternar Modo Escuro">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden">
            <button onClick={toggleNav} aria-label="Alternar Navegação">
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {navOpen && (
        <nav className="md:hidden bg-blue-900 dark:bg-gray-900">
          <ul className="flex flex-col items-center space-y-6 py-4">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleNav}
                className="hover:text-blue-300 cursor-pointer"
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleNav}
                className="hover:text-blue-300 cursor-pointer"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleNav}
                className="hover:text-blue-300 cursor-pointer"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleNav}
                className="hover:text-blue-300 cursor-pointer"
              >
                Contato
              </Link>
            </li>
            {/* Ícones de GitHub e LinkedIn no Menu Mobile */}
            <li className="flex space-x-4">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/cristianmartini"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
