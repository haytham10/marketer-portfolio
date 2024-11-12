/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'subtle-zoom': 'subtleZoom 20s ease-in-out infinite',
        'width': 'width 0.8s ease-out forwards',
        'scroll': 'scroll 2s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientX: {
          '0%, 100%': { backgroundSize: '200% 100%', backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        subtleZoom: {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1)' },
        },
        width: {
          '0%': { width: '0' },
          '100%': { width: '6rem' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};