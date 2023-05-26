/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slideDownModal: {
          from : { 
            transform: 'translate(-50%, -50%)', 
            opacity: 0
          },
          to : { 
            transform: 'translate(-50%, 25%)',
            opacity: 1
          }
        }
      },
      animation: {
        slideDownModal: 'slideDownModal .4s ease forwards'
      }
    },
  },
  plugins: [],
}
