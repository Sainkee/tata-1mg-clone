/** @type {import('tailwindcss').Config} */
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

      colors: {
        primary: "#ff6e61",
        offwhite: "#f6f6f6",
        dull: "#ffffff",
        beige: "#fffcf8",
      },
    },
  },
  plugins: [],
};
