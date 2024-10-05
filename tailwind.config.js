/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          white: '#FFFFFF',
          orange: '#E28743',
        },
        secondary: {
          gray: '#F5F5F5',
          'dark-gray': '#333333',
        },
        accent: {
          'light-orange': '#F5A25D',
          'dark-orange': '#E28743',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}