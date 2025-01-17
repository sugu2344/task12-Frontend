/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "FFFFFF",
      },
      fontFamily: {
        poppinsFont: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
