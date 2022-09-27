/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",   
      },
      fontFamily: {
        satoshi: ["satoshi"],
        Worksans: ["Worksans"]

      },
      backgroundImage: {
        imagebg:
          "url(https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20812287%20%281%29.svg)",
      },
      color:{
        fontbg:"#1E293B",
        regalblue: '#1E293B'
      }
    },
  },
  plugins: [],
}