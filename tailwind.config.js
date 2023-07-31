/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : 'Roboto, sans-serif',
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    "prettier-plugin-tailwindcss",
  ],
};
