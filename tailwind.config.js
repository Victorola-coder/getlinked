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
        "navb": "rgba(255, 255, 255, 0.04)",
        "line": "rgba(255, 255, 255, 0.18)",
      },
    },
  },
  plugins: [
    // require('tailwindcss'),
    // require('tailwindcss-gradients'),
    // require('tailwindcss-border-gradient'),
  ],
};
