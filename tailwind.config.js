/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily :{
        Inter : [ "Inter", "sans-serif"],
        Roboto :["Roboto"],
        Dm  : ["DM Sans"]
      }
    },
  },
  plugins: [],
  
}

