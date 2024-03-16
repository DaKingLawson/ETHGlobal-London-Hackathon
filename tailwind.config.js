/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      "ibm-plex-serif": ["IBM Plex Serif"],
    },
    extend: {
      colors: {
        coinBlue: "#2050F5",
        eggshell: "#F4F2ED",
        almostBlack: "#14181C",
      },
    },
  },
  plugins: [],
};
