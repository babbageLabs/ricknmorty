/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "outline-blue": "0 0 0 3px rgba(66, 153, 225, 0.5)",
        "text-lg": "0 0 0 3px rgba(66, 153, 225, 0.5)",
      },
    },
  },
  plugins: [],
}