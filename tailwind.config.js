/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"]
    },
    extend: {
      height: {
        "100": "32rem",
        "26": "6.76rem"
      },
      margin: {
        "112": "28rem"
      }
    },
  },
  plugins: [],
}
