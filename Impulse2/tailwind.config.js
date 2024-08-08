/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          'custom-md': '905px',
        },
        colors: {
        'custom-gray': '#D9D9D9',
      },
      },
    },
    plugins: [],
  }