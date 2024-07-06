/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "gasendra-blue-primary": "#189AC5",
        "gasendra-blue-secondary": "#ECE2AF",
        "gasendra-cream": "#BB9F76",
        primary: "#edbc48",
      },
    },
  },
  plugins: [],
};
