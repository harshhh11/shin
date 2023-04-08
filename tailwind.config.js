/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'article': 'repeat(auto-fit, 300px)',
      },
    },
  },
  plugins: [],
}

