module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      full: "100vh",
    },
    colors: {
      error: "#C93A3A",
      gray: {
        darkest: "#B6BEBE",
        dark: "#C7C9CD",
        light: "#EAEDEC",
        lightest: "#F0F4F3",
      },
      black: {
        darkest: "#0C0D0D",
        dark: "#1F2121",
        light: "#2F3333",
        lightest: "#5A5D60",
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
