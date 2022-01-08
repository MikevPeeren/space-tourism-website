module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B0D17",
        blue: "#D0D6F9",
        white: "#FFFFFF",
        gray: "#979797",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
