/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        red: "red",
        fontColor: {
          100: "white",
          200: "#C2C2C2",
          300: "#716f6c",
          400: "#FA5D36",
        },
        bgGray: {
          50: "#716f6c",
          100: "#2A2B30",
          200: "#2D2E33",
        },
        strokColor:"#fa5d3680"
      },
    },
   
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
