// src/components/AboutEducationExperience.jsx

import React from 'react';
import { FaBook, FaBriefcase, FaDownload } from 'react-icons/fa'; // Importando ícones representativos e o ícone de download
import { motion } from 'framer-motion';

const AboutEducationExperience = () => {
  return (
    <section
      id="about-education-experience"
      className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Título da Seção */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Formação Acadêmica & Experiência Profissional
        </motion.h2>

        {/* Grid das Subsecções */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Formação Acadêmica */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <FaBook className="text-blue-500 dark:text-blue-400 text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Formação Acadêmica</h3>
            </div>
            <div className="space-y-6">
              {/* Formação 1 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Sistemas para Internet</h4>
                <p className="text-gray-600 dark:text-gray-400">Senac São Paulo</p>
                <p className="text-gray-600 dark:text-gray-400">2º Semestre de 2022 - 2º Semestre de 2024 (Cursando 5º Semestre)</p>
              </div>
              {/* Formação 2 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Bacharel em Ciências Contábeis</h4>
                <p className="text-gray-600 dark:text-gray-400">Centro de Ensino Superior de Realeza - CESREAL</p>
                <p className="text-gray-600 dark:text-gray-400">Fevereiro de 2013 - Dezembro de 2016</p>
              </div>
            </div>
          </motion.div>

          {/* Experiência Profissional */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-blue-500 dark:text-blue-400 text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Experiência Profissional</h3>
            </div>
            <div className="space-y-6">
              {/* Experiência 1 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Auxiliar de Produção e Gestor de Serviços</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Desde o início da minha carreira, desenvolvi uma sólida experiência em liderança, gestão e otimização de processos. Como Auxiliar de Produção na Satiare Alimentos, fui responsável pela operação de máquinas de produção e supervisão do setor, implementando melhorias que aumentaram a eficiência operacional.
                </p>
              </div>
              {/* Experiência 2 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Gestor de Serviços Domésticos</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Em 2017, expandi minhas habilidades assumindo a função de Gestor de Serviços Domésticos, onde gerenciei a manutenção completa de residências, organizei eventos e coordenei equipes de funcionários domésticos. Essas experiências me proporcionaram uma boa base em gestão de projetos, comunicação eficaz e resolução de problemas, competências que aplico atualmente na área de Desenvolvimento Web.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Botão de Download do Currículo */}
        <div className="text-center mt-16">
          <motion.a
            href="src\assets\Cristian-Martini-Curriculo.pdf" 
            download
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" />
            Baixar Currículo
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutEducationExperience;
