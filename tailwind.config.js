const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      'site-xl': '95rem',
      'site-lg': '77.5rem',
      'site-md': '45rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-karla)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
