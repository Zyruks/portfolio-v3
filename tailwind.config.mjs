/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animationDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      animationDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      colors: {
        primary: {
          // Update with the colors you want
          50: '#EFF8FF',
          100: '#DEF0FF',
          200: '#B6E2FF',
          300: '#75CdFF',
          400: '#2CB5FF',
          500: '#00A0FF',
          600: '#007BD4',
          700: '#0061AB',
          800: '#00528D',
          900: '#064574',
          950: '#042B4D',
        },
      },
      fontSize: {
        'fluid-sm': 'clamp(1rem, 1.5vw, 1.5rem)',
        'fluid-base': 'clamp(1.375rem, calc(0.95rem + 1.25vw), 1.75rem)',
        'fluid-lg': 'clamp(1.575rem, calc(1.05rem + 1.50vw), 2.25rem)',
        'fluid-xl': 'clamp(1.775rem, calc(1.15rem + 1.75vw), 2.75rem)',
        'fluid-2xl': 'clamp(1.875rem, 8vw, 5rem)',
        'fluid-md': 'clamp(1.225rem, calc(0.875rem + 1.375vw), 1.525rem)',
        'fluid-3xl': 'clamp(1.975rem, calc(1.25rem + 2.00vw), 3.25rem)',
        'fluid-4xl': 'clamp(2.075rem, calc(1.35rem + 2.25vw), 3.50rem)',
        'fluid-5xl': 'clamp(2.175rem, calc(1.45rem + 2.50vw), 3.75rem)',
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
