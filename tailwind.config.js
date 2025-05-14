/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // Add custom 13-column layout
        '13': 'repeat(13, minmax(0, 1fr))',
      },
    },
  },
}
  