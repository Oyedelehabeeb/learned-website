/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "rgb(236, 227, 202)",
        darkGray: "rgb(46, 40, 42)",
        mediumGray: "rgb(116, 116, 116)",
        customGray: "rgb(110, 100, 100)",
      },
    },
  },

  plugins: [],
};
