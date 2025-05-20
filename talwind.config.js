/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      //   screens: {
      //     "max-sm": { max: "639px" },
      //     xxs: "10px",
      //     xs: "475px",
      //     sm: "640px",
      //     md: "768px",
      //     lg: "1024px",
      //     xl: "1280px",
      //     "2xl": "1536px",
      //   },
    },
  },
  plugins: [],
};
