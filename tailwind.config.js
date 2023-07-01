/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#030712",
          secondary: "#22d3ee",
          accent: "#f97316",
          textBody: "#9ca3af",
          textHeader: "#f9fafb",
          textHover: "#f9fafb",
          textActive: "#0891b2",
        },
      },
      fontFamily: {
        primary: ["var(--font-archivo)"],
        secondary: ["var(--font-opensans)"],
        third: ["var(--font-brush-script-mt)"],
      },
    },
  },
  plugins: [],
};
