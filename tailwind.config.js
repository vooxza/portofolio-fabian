/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12151a",
        inkalt: "#171b22",
        surface: "#1c212a",
        hairline: "#2a3038",
        ivory: "#e8e6df",
        dim: "#97a1ae",
        faint: "#5f6875",
        sage: "#7fada5",
        gold: "#c9a876",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"Inter"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
