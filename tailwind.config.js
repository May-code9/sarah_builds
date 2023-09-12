/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-blue-900': '#191919',
        'btn-blue': '#329AD8',
        'card-color-300': '#056272',
        'card-color-200': '#4B8E99',
        'arrow-blue': '#399DDC'
      }
    }
  },
  plugins: []
}
