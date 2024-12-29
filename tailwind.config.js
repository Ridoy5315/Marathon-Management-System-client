/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontHeading : "'Montserrat', serif",
        fontBody: "'Open Sans', serif"
      },
      colors: {
        'primary-color': '#071F5D',
        'secondary-color': '#F13735',
        'additional-color': '#0682D1',
      }
    },
  },
  plugins: [daisyui],
}

