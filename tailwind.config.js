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
        "real-blue": "#0A58CA",
      },
      // animation
      keyframes: {
        leftRight: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(-10px)', // Adjust this value as per your requirement
          },
        },
        updown: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)', // Adjust this value as per your requirement
          },
        },
        zoomInOut: {
          '0%, 100%': {
            transform: 'scale(0.85)',
          },
          '50%': {
            transform: 'scale(1)', // Adjust this value as per your requirement
          },
        },
      },
      animation: {
        leftRight: 'leftRight 3s ease-in-out infinite',
        updown: 'updown 4s ease-in-out infinite', 
        zoomInOut: 'zoomInOut 5s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
};
