/** @type {import('tailwindcss').Config}, */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateCol: {
        six: "repeat(auto-fit, minmax(6rem, auto))",
      },
      boxShadow: {
        mid: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      lineHeight: {
        custom: "1.42857143",
      },

      fontFamily: {
        sans: [
          "Clear Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },

      colors: {
        primary: "#ff6e61",
        offwhite: "#f6f6f6",
        dull: "#ffffff",
        beige: "#fffcf8",
        safe: "#ffe3c2",
      },
    },
  },
  plugins: [],
};
