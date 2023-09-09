/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/*.{js,jsx}',],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'nav-green': '#DDF3DE'
      },
      backgroundColor: {
        'custom-blue': '#3254a8',
      },
      textColor: {
        'reminder-green': '#318A33',
        'active-nav': '#2F8331'
      }
    },
  },
  variants: {},
  plugins: [],
}
