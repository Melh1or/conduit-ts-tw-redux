/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif;"],
        sourceSerif: ["Source Serif Pro", "serif;"],
      },
      colors: {
        conduit: {
          gray: {
            100: "#f3f3f3",
            150: "#e5e5e5",
            200: "#eceeef",
            250: "#e5e5e5",
            300: "#ddd",
            400: "#ccc",
            500: "#bbb",
            600: "#aaa",
            650: "#a1a1a1",
            700: "#999",
            800: "#818a91",
            900: "#687077",
            1000: "#373a3c",
            1100: "#333",
          },
          green: "#5CB85C",
          darkGreen: "#3d8b3d",
          red: "#B85C5C",
        },
      },
      spacing: {
        0.2: "0.2rem",
        0.3: "0.3rem",
        navItem: "0.425rem",
        tag: "0.6rem",
        25: "6.25rem",
      },
      boxShadow: {
        banner:
          "inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)",
      },
      dropShadow: {
        logo: "0px 1px 3px rgb(0 0 0 / 30%)",
      },
      fontSize: {
        logo: "3.5rem",
        date: "0.8rem",
        articleTitle: "2.8rem",
        articleBody: "1.2rem",
      },
      lineHeight: {
        articleTitle: "1.1",
        articleBody: "1.8rem",
      },
      borderRadius: {
        buttonSm: "0.2rem",
        tag: "10rem",
      },
      opacity: {
        15: "0.15",
      },
    },
  },
  plugins: [],
};
