/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["bumblebee"]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
