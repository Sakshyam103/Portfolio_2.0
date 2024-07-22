// let defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Qwitcher: ["Qwitcher Grypen", "san-serif"]
      }
    },
  },
  plugins: [],
};