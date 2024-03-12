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
        myBlue: "#6865FF",
        myDark: "#000229",
        "low-dark": "#1D2041",
        myPink: "#FF3C82",
        "low-pink": "#FFA8B8",
        "real-blue": "#0A58CA",
      },
    },
  },
  plugins: [],
};
