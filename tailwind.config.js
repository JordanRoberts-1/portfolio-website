/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inconsolata', 'Helvetica', 'Arial', 'sans-serif']
      }
    },

    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  plugins: [],
}
