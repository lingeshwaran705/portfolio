module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      "0xl": "0 0px 20px 0px rgba(0, 0, 0, 0.3)",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        nunito: ["Nunito", "sans - serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
