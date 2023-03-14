/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        logoFont: ['Shadows Into Light', "cursive"],
        poppins: ["Poppins","sans-serif"],
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave", "dark", "coffee", "cyberpunk"],
  },
};
