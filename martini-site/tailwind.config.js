// tailwind.config.js
module.exports = {
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0A2540', // Azul Escuro
          300: '#3E92CC', // Azul Claro
        },
        gray: {
          900: '#1A202C', // Cinza Escuro (fundo no modo escuro)
          100: '#F5F7FA', // Cinza Claro
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
