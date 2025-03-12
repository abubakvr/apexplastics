/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f0",
          100: "#dcf0dd",
          200: "#bae2bc",
          300: "#8fcf93",
          400: "#5db663",
          500: "#3c9d43",
          600: "#2e7d32", // Main primary color
          700: "#276329",
          800: "#1b5e20", // Dark primary
          900: "#194d1c",
        },
        secondary: {
          50: "#f1f8e9",
          100: "#dcedc8",
          200: "#c5e1a5",
          300: "#aed581",
          400: "#9ccc65",
          500: "#8bc34a",
          600: "#7cb342",
          700: "#689f38",
          800: "#558b2f",
          900: "#33691e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
