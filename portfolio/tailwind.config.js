/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#edede9",
        text: "#00000",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
