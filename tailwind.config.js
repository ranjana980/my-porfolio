/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      screens: {
        // mobile
        'xs': '375px',
        // LandScape
        'sm': '425px',
        // tablets
        'md': '768px',
        // Desktop
        'lg': '1024px',
        // large dekstop
        'xl': '1440px',
      },
    },
    plugins: [],
  }