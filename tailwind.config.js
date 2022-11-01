/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: "Poppins, sans-serif",
      Heading: "Segoe UI",
      body: "Lato, sans-serif",
      title: "Nunito",
    },
    extend: {},
  },
  plugins: [],
};
