/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-container": "#fcd400",
        "on-secondary-container": "#6e5c00",
        "secondary-fixed": "#ffe16d",
        "primary": "#00658d",
        "primary-container": "#00aeef",
        "tertiary": "#006e1c",
        "tertiary-container": "#54b757",
        "secondary": "#705d00",
      },
      fontFamily: {
        "body": ["Inter", "sans-serif"],
        "display": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}