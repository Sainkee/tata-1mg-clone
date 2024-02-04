/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6e61",
        offwhite :"#f6f6f6",
        dull :"#ffffff",
      },
    },
  },
  plugins: [],
};
