/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-blue": "#3a86ff",
      },
      fontFamily: {
        Raleway: ['Raleway', "sans-serif"],
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

