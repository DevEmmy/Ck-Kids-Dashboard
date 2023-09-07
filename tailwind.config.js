/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/Kids-Dashboard**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/Teachers-Dashboard**/*.{js,ts,jsx,tsx,mdx}",
    "./src/AtomicComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        
      },
      spacing: {
        xPadding: "5%",
        xpadding: "6.94%",
      },
      gridTemplateColumns: {
        "3to1": "3fr 1fr",
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary1: "#F5AE1E",
        primary2: "#00AC76",
        primary3: "#8D67CE",
        primary4: "#FE5972",
        primary5: "#D8D8D8",
        purplePrime: "#6941C6",
        secondary1: "rgba(0, 0, 0, 0.5)",
        sec1: "#00AC76",
        sec2: "#FFF",
        sec3: "#090914",
        sec4: "#52525B",
        sec5: "#222",
        sec6: "#FDEFD2",
        sec7: "#000",
      },
      fontFamily: {
        sans: ["Open Sans", "sans"],
      },
      screens: {
        lt: { max: "500px" },
        sm: { max: "600px" },
        sm1: { max: "768px" },
        md: { max: "800px" },
        md1: { max: "850px" },
        lg: { max: "1707px" },
        ls: { max: "1370px" },
        xl: { max: "1250px" },
        lf: { max: "1150px" },        
      },
    },
  },
  plugins: [],
};
