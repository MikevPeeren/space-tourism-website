module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#0B0D17",
        blue: "#D0D6F9",
        white: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
