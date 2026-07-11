/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind scans these files and only keeps the CSS classes we actually use.
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Our own brand colors, so instead of writing "bg-green-600" everywhere
        // we can write "bg-leaf" and change the shade in ONE place later.
        leaf: "#3F7D58",
        leafDark: "#2E5D42",
        cream: "#FBF7EF",
        clay: "#E4572E",
        charcoal: "#2B2B28",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
