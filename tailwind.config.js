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
          textBody: "#d1d5db",
          textHeader: "#ffffff",
          textHover: "#f9fafb",
          textActive: "#0891b2",
        },
      },
      fontFamily: {
        primary: ["var(--font-archivo)"],
        secondary: ["var(--font-opensans)"],
      },
    },
  },
  plugins: [],
};
