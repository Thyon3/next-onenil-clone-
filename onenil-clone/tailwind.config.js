/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        accentPurple: "#9d4edd",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        heading: ["var(--font-heading)"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
