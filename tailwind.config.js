/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inconsolata', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Anonymous Pro'],
        'retro': ['Share Tech Mono']
      },
      keyframes: {
        fadeinup: {
          '0%': { transform: 'translateY(50%)',
        opacity: 0},
          '100%': { transform: 'translateY(0%)', opacity:100},
        }, fadeinupfadeout: {
          '0%': { transform: 'translateY(50%)',
        opacity: 0},
          '20%': { transform: 'translateY(0%)', opacity:100},
          '80%': { transform: 'translateY(0%)', opacity:100},
          '100%': { transform: 'translateY(0%)', opacity:0}
        }
      },
      animation: {
        'fade-in-up': 'fadeinup 750ms 2.75s ease-in-out forwards',
        'fade-in-up-fade-out': 'fadeinupfadeout 5s 0s ease-in-out forwards'
      }, 
      colors: {
        'light': '#3e3b3a',
        'dark': '#292524'
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
