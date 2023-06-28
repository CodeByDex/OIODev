/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#030712',
          secondary: '#0891b2',
          accent: '#f97316',
          textBody: '#6b7280',
          textHeader: '#e5e7eb',
          textHover: '#e5e7eb',
          textActive: '#0891b2'
        }
      },
    },
  },
  plugins: [],
}
