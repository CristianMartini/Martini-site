// src/components/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaServer,
  FaLightbulb,
  FaUserFriends,
  FaAdjust,
  FaHandshake,
  FaChalkboardTeacher,
  FaClock,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiKotlin,
  SiNextdotjs,
  SiAngular,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiGithub,
  SiDocker,
} from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', icon: <FaHtml5 size={30} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={30} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={30} color="#F7DF1E" /> },
    { name: 'PHP', icon: <FaPhp size={30} color="#777BB4" /> },
    { name: 'Java', icon: <FaJava size={30} color="#007396" /> },
    { name: 'Kotlin', icon: <SiKotlin size={30} color="#0095D5" /> },
    { name: 'React', icon: <FaReact size={30} color="#61DAFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={30} color="#000000" /> },
    { name: 'Angular', icon: <SiAngular size={30} color="#DD0031" /> },
    { name: 'Laravel', icon: <SiLaravel size={30} color="#FF2D20" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={30} color="#7952B3" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} color="#38B2AC" /> },
    { name: 'Git', icon: <FaGitAlt size={30} color="#F05032" /> },
    { name: 'GitHub', icon: <SiGithub size={30} color="#181717" /> },
    { name: 'VS Code', icon: <SiVisualstudiocode size={30} color="#007ACC" /> },
    { name: 'Android Studio', icon: <SiAndroidstudio size={30} color="#3DDC84" /> },
    { name: 'Docker', icon: <SiDocker size={30} color="#2496ED" /> },
    { name: 'APIs RESTful', icon: <FaServer size={30} color="#6DB33F" /> }, // Correção aqui
    { name: 'MySQL', icon: <SiMysql size={30} color="#4479A1" /> },
    { name: 'MongoDB', icon: <SiMongodb size={30} color="#47A248" /> },
  ];

  const softSkills = [
    { name: 'Liderança', icon: <FaLightbulb size={24} /> },
    { name: 'Trabalho em Equipe', icon: <FaUserFriends size={24} /> },
    { name: 'Adaptabilidade', icon: <FaAdjust size={24} /> },
    { name: 'Confiabilidade e Respeito', icon: <FaHandshake size={24} /> },
    { name: 'Comunicação Eficaz', icon: <FaChalkboardTeacher size={24} /> },
    { name: 'Gerenciamento de Tempo', icon: <FaClock size={24} /> },
  ];

  return (
    <section id="skills"  className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-white dark:text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Habilidades
        </motion.h2>

        {/* Breve Descrição */}
        <motion.p
          className="text-center text-gray-200 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Essas são as principais tecnologias e competências que utilizo para desenvolver soluções eficientes e inovadoras.
        </motion.p>

        {/* Habilidades Técnicas */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-center text-white dark:text-gray-200">
            Habilidades Técnicas
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <div className="mb-2" aria-label={skill.name} title={skill.name}>
                  {skill.icon}
                </div>
                <p className="text-center text-white dark:text-gray-200 text-sm">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Habilidades Comportamentais */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-white dark:text-gray-200">
            Habilidades Comportamentais
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <div className="text-blue-300 dark:text-blue-400 mr-3" aria-label={skill.name} title={skill.name}>
                  {skill.icon}
                </div>
                <p className="text-gray-800 dark:text-gray-200">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
