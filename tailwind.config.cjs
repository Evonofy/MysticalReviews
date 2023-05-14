/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "8px",
      },
      fontFamily: {
        base: "",
        display: "",
        reading: "",
      },
      colors: {
        gray: {
          100: "#FFFFFF",
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#A6A6A6",
          500: "#8C8C8C",
          600: "#636363",
          700: "#474747",
          800: "#2A2A2A",
          900: "#1B1818",
        },
        accent: {
          light: "#33EEFF",
          base: "#00BBCC",
          dark: "#24868F",
          darkest: "#1C464A",
        },
        secondary: {
          light: "#6666FF",
          base: "#5252E0",
          dark: "#4040BF",
          darkest: "#1C1C4A",
        },
      },
      boxShadow: {
        main: "0px -4px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}
