/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Space Grotesk", "sans-serif"] },
      colors: {
        cream: "#F0EDE6",
        yellow: "#F5C518",
        pink: "#E8357A",
        "pink-light": "#FF6BA8",
        ink: "#111111",
        card: "#FFFFFF",
      },
      boxShadow: {
        brutal: "4px 4px 0px #111111",
        "brutal-lg": "6px 6px 0px #111111",
        "brutal-sm": "2px 2px 0px #111111",
      },
    },
  },
  plugins: [],
};
