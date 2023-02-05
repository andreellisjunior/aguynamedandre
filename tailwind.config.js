const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   dark: "#29333D",
    // },
    extend: {
      fontFamily: {
        monts: ["var(--font-montserrat)", ...fontFamily.sans],
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
