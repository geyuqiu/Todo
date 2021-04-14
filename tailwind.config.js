module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      error: "#C93A3A",
      gray: {
        dark: "#C7C9CD",
        lightest: "#F0F4F3",
      },
      white: "#fff"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
