/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dark: "class",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
