/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        colTextMain: "hsl(0, 0%, 100%)",
        bgGradientMain: "hsl(252, 100%, 67%)",
        bgGradientSec: "hsl(241, 81%, 54%)",
        ccGradientMain: "hsla(241, 72%, 46%, 0",
        ccGradeintSecondary: "hsla(241, 72%, 46%, 0",
        primaryRed: "hsl(0, 100%, 67%)",
        primaryOrangeYellow: "hsl(39, 100%, 56%)",
        primaryGreen: "hsl(166, 100%, 37%)",
        primaryBlue: "hsl(234, 85%, 45%)",
      },
      fontFamily: {
        hanken: "Hanken Grotesk",
      },
    },
  },
  plugins: [],
};

