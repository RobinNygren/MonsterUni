/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "monsters-uni": {
          primary: "#7851A9",
          secondary: "#4169E1",
          accent: "#046307",
          background: "#71797E",
          detail: "#C0C0C0",
        },
      },
    },
  },
  plugins: [],
};
