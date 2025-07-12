// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary: "#1368ec",
      },
    },
  },
  plugins: [],
};
