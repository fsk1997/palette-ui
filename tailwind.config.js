/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx.css}",
  ],
  safelist: [
    "./src/pages/project/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          magenta: "#EC61EC",
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "922px",
        xl: "1140px",
        "2xl": "1141px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [],
  presets: [
    require("windy-radix-palette")
  ],
};
