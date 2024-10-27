module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0A2540',
          300: '#3E92CC',
        },
        gray: {
          900: '#1A202C',
          100: '#F5F7FA',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem', // Ajusta o padding conforme necessário
      },
    },
  },
  plugins: [],
};
