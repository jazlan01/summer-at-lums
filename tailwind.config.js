/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    "prettier-plugin-tailwindcss",
  ],
};
