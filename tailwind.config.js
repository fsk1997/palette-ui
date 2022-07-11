/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx.css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Switzer", 'serif'],
      },
    },
  },
  plugins: [],
  presets: [require("windy-radix-palette")],
};
