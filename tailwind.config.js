/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#000000',
        accent: '#0070f3',
        background: {
          DEFAULT: '#000000',
          secondary: '#0a0a0a',
        },
        text: {
          DEFAULT: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.7)',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.2)',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      backgroundColor: {
        'dark': '#000000',
        'dark-secondary': '#0a0a0a',
      },
    },
  },
  plugins: [],
} 