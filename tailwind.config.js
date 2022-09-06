/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inconsolata', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Anonymous Pro']
      },
      keyframes: {
        fadeinup: {
          '0%': { transform: 'translateY(50%)',
        opacity: 0},
          '100%': { transform: 'translateY(0%)', opacity:100}
        }
      },
      animation: {
        'fade-in-up': 'fadeinup 750ms ease-in-out forwards'
      }
    },

    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  plugins: [],
}
