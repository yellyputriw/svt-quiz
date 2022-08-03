/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        mengShadow: "5px 5px 4px 0px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        sernity: {
          100: "#e9eef6",
          200: "#d3dced",
          300: "#becbe3",
          400: "#a8b9da",
          500: "#92a8d1",
          600: "#7586a7",
          700: "#58657d",
          800: "#3a4354",
          900: "#1d222a",
        },
        quartz: {
          100: "#fdf4f4",
          200: "#fceae9",
          300: "#fadfdf",
          400: "#f9d5d4",
          500: "#f7cac9",
          600: "#c6a2a1",
          700: "#947979",
          800: "#635150",
          900: "#312828",
        },
      },
    },
  },
});
