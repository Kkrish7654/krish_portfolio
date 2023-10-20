/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#06D777",
        gray:"#CECECE"
      },
      screens:{
        md:"1280px",
        xl:"1440px"
      }
    },
  },
  plugins: [],
}