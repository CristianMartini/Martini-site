// src/components/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Título da Seção */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Contato
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-start gap-12">
          {/* Formulário de Contato */}
          <motion.form
            className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            action="mailto:cristianmartini.sp@gmail.com"
            method="post"
            encType="text/plain"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
              placeholder="Seu nome"
            />

            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
              placeholder="Seu e-mail"
            />

            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
              placeholder="Sua mensagem"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 dark:bg-blue-700 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
            >
              Enviar
            </button>
          </motion.form>

          {/* Informações de Contato */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Email */}
            <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaEnvelope size={24} className="text-blue-500 dark:text-blue-400" />
              <a href="mailto:cristianmartini.sp@gmail.com" className="text-lg text-gray-700 dark:text-gray-200 hover:underline break-all">
                cristianmartini.sp@gmail.com
              </a>
            </div>
            {/* Telefone */}
            <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaPhone size={24} className="text-green-500 dark:text-green-400" />
              <a href="tel:+5511941798931" className="text-lg text-gray-700 dark:text-gray-200 hover:underline break-all">
                (11) 94179-8931
              </a>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaLinkedin size={24} className="text-blue-700 dark:text-blue-500" />
              <a href="https://linkedin.com/in/cristianmartinisp" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 dark:text-gray-200 hover:underline break-all">
                linkedin.com/in/cristianmartini
              </a>
            </div>
            {/* WhatsApp */}
            <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaWhatsapp size={24} className="text-green-500 dark:text-green-400" />
              <a href="https://wa.me/5511941798931" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 dark:text-gray-200 hover:underline break-all">
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
