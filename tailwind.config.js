/** @type {import('tailwindcss').Config} */

const { transparent } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'kalmyk-yellow': '#ffd600',
      'kalmyk-blue': '#009cdd',
      'tibet-red': '#881d22',
      'txt-on-kalmyk-blue': '#fff',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      'transparent': transparent
    },
    extend: {
      screens: {
        'xlg': '1175px'
      }
    },
  },
  plugins: [],
}
