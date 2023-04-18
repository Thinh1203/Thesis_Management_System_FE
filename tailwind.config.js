/** @type {import("tailwindcss").Config} */
module.exports = {
  theme: {
    fontFamily: {
      Poppins: ["Poppins"]
    },
    extend: {
      height: {
        "100": "32rem",
        "26": "6.76rem"
      },
      width: {
        "100": "30rem"
      },
      margin: {
        "112": "28rem"
      }
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  plugins: [],
}
