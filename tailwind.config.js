module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '38': '9.5rem',
      }
    },

    colors: {
      'black': 'black',
      'white': 'white',
      'gray': 'gray',
      'pink': 'hsl(322, 100%, 66%)',
      'light-pink': 'hsl(321, 100%, 78%)',
      'light-red': 'hsl(0, 100%, 63%)',
      'dark-cyan': 'hsl(192, 100%, 9%)',
      'pale-blue': 'hsl(207, 100%, 98%)',
      'facebook-blue': '#4267B2',
      'twitter-blue': '#1DA1F2'
    },

    fontFamily: {
      'heading': ['Poppins', 'Arial', 'sans-serif'],
      'body': ['Open Sans', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
