/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor : "#5F8670",
        secondaryColor: "#F4CE14"
      }
    },
  },
  plugins: [],
}

