// src/components/ProjectCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Imagem do Projeto */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-80 object-cover"
      />

      {/* Conteúdo do Projeto */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="mb-4">
          <strong className="text-gray-800 dark:text-gray-200">Tecnologias Utilizadas:</strong>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {project.technologies.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:underline"
        >
          <FaGithub className="mr-2" />
          Ver no GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
