/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["lofi", "night"]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
