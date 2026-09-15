/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#245b45", ink: "#202923", muted: "#68716a", canvas: "#f7f8f4", sage: "#eaf0e8", line: "#dde3da",
        beige: "rgb(236, 227, 202)",
        darkGray: "rgb(46, 40, 42)",
        mediumGray: "rgb(116, 116, 116)",
        customGray: "rgb(110, 100, 100)",
      },
    },
  },

  plugins: [],
};
