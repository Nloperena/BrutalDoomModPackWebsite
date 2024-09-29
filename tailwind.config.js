/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'breathing-glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(173, 80, 23, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(173, 80, 23, 1)' },
        },
      },
      rotate: {
        'y-180': '180deg',
        '360': '360deg',
      },
    },
  },
  plugins: [],
};

