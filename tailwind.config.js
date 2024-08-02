/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        TenorSans: ["Tenor Sans", "sans-serif"],
        PlayfairDisplay: ["Playfair Display", "serif"],
        BerkshireSwash: ["Berkshire Swash", "serif"],
      },
    },
  },
  plugins: [],
}