/** @type {import('tailwindcss').Config} */

const { transparent } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'kalmyk-yellow': '#ffd600',
      'kalmyk-blue': '#3066be',
      'tibet-red': '#881d22',
      'tibet-red-light': '#a04a4e',
      'txt-on-kalmyk-blue': '#fff',
      'txt-dark': '#07142c',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      'transparent': transparent
    },
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens
      },
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"'],
        ...defaultTheme.fontFamily
      }
    },
  },
  plugins: [],
}
