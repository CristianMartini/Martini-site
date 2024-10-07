// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-white dark:text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Mim
        </motion.h2>

        {/* Conteúdo */}
        <motion.div
          className="text-white dark:text-gray-200 md:text-lg leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="mb-4">
            Após conhecer minhas habilidades, gostaria de compartilhar um pouco mais sobre minha trajetória e objetivos profissionais.
          </p>
          <p className="mb-4">
            Olá! Eu sou o <span className="font-semibold">Cristian Martini</span>, um desenvolvedor web full-stack em formação, atualmente cursando <span className="font-semibold">Sistemas para Internet</span> no Senac São Paulo. Com uma sólida base em Ciências Contábeis, minha trajetória profissional inclui posições de liderança e gerenciamento, proporcionando habilidades valiosas em comunicação, trabalho em equipe e resolução de problemas.
          </p>
          <p className="mb-4">
            Sou apaixonado por tecnologia e inovação, sempre buscando aprender novas ferramentas e melhorar minhas habilidades para entregar soluções eficientes e de alta qualidade.
          </p>
          <p className="mb-6">
            Meu objetivo profissional é atuar na área de Desenvolvimento Web, aplicando meus conhecimentos técnicos e contribuindo para o desenvolvimento de projetos inovadores, enquanto continuo a crescer e me aprimorar profissionalmente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
