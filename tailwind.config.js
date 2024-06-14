/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#f2f2f2",
        },
        gray: "#14274a",
        gainsboro: "#d9d9d9",
        black: "#000",
        dimgray: "#595959",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "inria-sans": "'Inria Sans'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "45xl": "64px",
      "13xl": "32px",
      "11xl": "30px",
      xl: "20px",
      "16xl": "35px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
