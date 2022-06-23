/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      blue: '#2d46c8',
      white: '#ffffff',
      transaprent_black: '#00000040',
      primary: '#007FC5',
    },
    gradientColorStops: {
      main: 'bg-gradient-to-r from-black via-blue-900 to-black',
    },
    extend: {},
  },
  plugins: [],
}
