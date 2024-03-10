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
        xs: "380px",
        mobile: "480px",
      },
      colors: {
        myBlue: "#6865ff",
        myDark: "#000229",
        "low-dark": "#1d2041",
        myPink: "#ff3c82",
        "low-pink": "#FFA8B8",
        "real-blue": "#0a58ca",
      },
    },
  },
  plugins: [],
};
