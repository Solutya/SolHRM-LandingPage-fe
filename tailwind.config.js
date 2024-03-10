/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      colors: {
        blue: "#6865ff",
        dark: "#000229",
        "low-dark": "#1d2041",
        pink: "#ff3c82",
        "low-pink": "#FFA8B8",
        "real-blue": "#0a58ca",
      },
    },
  },
  plugins: [],
};
