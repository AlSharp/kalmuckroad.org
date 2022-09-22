/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'kalmyk-yellow': '#ffd600',
      'kalmyk-blue': '#009cdd',
      'tibet-red': '#881d22'
    },
    extend: {
      screens: {
        '2lg': '1170px'
      }
    },
  },
  plugins: [],
}
