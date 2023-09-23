/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        clash: ["clash", "sans-serif"],
        clashbold: ["clashBold", "sans-serif"],
        uni: ["Unica One", "cursive"],
        tom: ["TommyOutline", "sans-serif"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1220px",
        xxl: "1400px",
      },
      colors: {
        "dark-gray": "#150E28",
        "brand-purple-1": "#D434FE",
        navb: "rgba(255, 255, 255, 0.04)",
        line: "rgba(255, 255, 255, 0.18)",
        win: "rgba(212, 52, 254, 0.12)",
        winn: "rgba(144, 58, 255, 0.12)",
        partner: "gba(255, 255, 255, 0.01)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
      boxShadow: {
        reg: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    // require('tailwindcss'),
    // require('tailwindcss-gradients'),
    // require('tailwindcss-border-gradient'),
  ],
};
