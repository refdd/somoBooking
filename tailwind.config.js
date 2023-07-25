/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#445cdc",
        secondColor: "#2e86b8",
        mainLightColor: "#9E6EAE",
        textPurple: "#704f88",
        MainYeloow: "#2e86b8",
        textColor: "#3A2D4C",
        secandTextColor: "#462472",
        shadowColorMain: "#9e6eae5e",
      },
    },
  },
  plugins: [],
};
