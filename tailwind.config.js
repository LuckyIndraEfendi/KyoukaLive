/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      karla: ["Karla", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      fira: ["Fira Sans", "sans-serif"],
      rowdies: ["Rowdies", "sans-serif"],
      outfits: ["Outfits", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      italic: ["Italic", "sans-serif"],
    },
  },
  plugins: [],
};
