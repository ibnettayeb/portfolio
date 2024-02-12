/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD967",
        bg: {
          100: "#121B30",
          200: "#353F4F",
          300: "#0F172A",
        },
        whiteColor: "#fff",
      },
      fontFamily: {
        syncopate: "Syncopate",
        sora: "Sora",
      },
    },
  },
  plugins: [],
};
