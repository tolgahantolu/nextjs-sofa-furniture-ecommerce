/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-white": "#fafaf9",
        "color-black": "#1c1d1c",

        "color-primary": "#020826",
        "color-secondary": "#f25042",

        "background-primary": "#f9f4ef",
        "background-secondary": "#fffffe",
      },
      padding: {
        25: "100px",
        50: "200px",
        100: "300px",
      },
      margin: {
        25: "100px",
        50: "200px",
        100: "300px",
      },
      height: {
        25: "100px",
        50: "200px",
        100: "300px",
      },
      width: {
        25: "100px",
        50: "200px",
        100: "300px",
      },
      backgroundImage: {
        "hero-section": "url('/sofa-1.jpg')",
        "login-section": "url('/sofa-2.jpg')",
        "register-section": "url('/sofa-3.jpg')",
      },
      lineHeight: {
        huge: "4.5rem",
      },
    },
  },
  plugins: [],
};
