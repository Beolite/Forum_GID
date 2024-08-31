/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
    "./src/Navbar.jsx",
    "./src/HomePage.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
        display: "none",
        },
      }

      addUtilities(newUtilities);
    }
  ],
}