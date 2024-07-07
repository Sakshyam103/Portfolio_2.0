/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
            Qwitcher: ["Qwitcher Grypen", "san-serif"]
        },
        dropShadow: {
            glow: [
                "0 0px 20px rgba(255,255, 255, 0.35)",
                "0 0px 65px rgba(255, 255,255, 0.2)"
            ]
        }
    },
  },
  plugins: [],
}

