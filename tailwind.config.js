const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts}', './components/**/*.{js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      lime: colors.lime,
      yellow: colors.yellow,
      green: colors.green
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
