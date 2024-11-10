/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out',
        'scroll': 'scroll 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};