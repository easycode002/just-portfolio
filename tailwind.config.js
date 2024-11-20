/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "blue",
        secondary: "gray",
        danger: "red",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        ubuntubold: ["Ubunto-Bold", "sans-serif"],
        ubuntulight: ["Ubuntu-Light", "sans-serif"],
        ubunturegular: ["Ubuntu-Regular", "sans-serif"],
        kantumruy: ["Kantumruy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
