/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif;"],
      },
      colors: {
        conduit: {
          green: "#5CB85C",
          darkGreen: "#3d8b3d",
          lightenGray: "#ddd",
          gray: "#bbb",
          darkestGray: "#373a3c",
          darkenGray: "#999",
          tag: "#aaa",
          pageHoverBg: "#eceeef",
          tagCloudBg: "#f3f3f3",
          tagItemBg: "#818a91",
          tagItemBgDarken: "#687077",
        },
      },
      spacing: {
        navItem: "0.425rem",
        0.2: "0.2rem",
        0.3: "0.3rem",
        tag: "0.6rem",
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
      },
      borderRadius: {
        buttonSm: "0.2rem",
        tag: "10rem",
      },
    },
  },
  plugins: [],
};
