module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      width: {
        5.5: "1.375rem", // This is between 1.25rem (w-5) and 1.5rem (w-6)
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
