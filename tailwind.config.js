import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        expasion1: "expasion1 1.8s infinite ease-out",
        expasion2: "expasion2 2.2s infinite ease-out",
        expasion3: "expasion3 2.4s infinite ease-out",
        iphone: "iphone 3s infinite ease",
        profile: "profile 3.4s infinite ease",
        profile2: "profile 3.8s infinite ease",
        profile3: "profile 3.9s infinite ease",
      },
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      keyframes: {
        expasion1: {
          "0%": { width: "100px", height: "100px", opacity: "0%" },
          "50%": { width: "200px", height: "200px", opacity: "100%" },
          "100%": { width: "220px", height: "220px", opacity: "0%" },
        },
        expasion2: {
          "0%": { width: "300px", height: "300px", opacity: "0%" },
          "50%": { width: "400px", height: "400px", opacity: "100%" },
          "100%": { width: "420px", height: "420px", opacity: "0%" },
        },
        expasion3: {
          "0%": { width: "500px", height: "500px", opacity: "0%" },
          "50%": { width: "600px", height: "600px", opacity: "100%" },
          "100%": { width: "620px", height: "620px", opacity: "0%" },
        },
        iphone: {
          "0%": { top: "50%" },
          "50%": { top: "52%" },
          "100%": { top: "50%" },
        },
        profile: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
