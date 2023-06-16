/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",

  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
      },
      screens: {
        xsm: "500px",
        xxsm: "300px",
      },
    },
  },
  plugins: [

  ],
};
