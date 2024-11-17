/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
