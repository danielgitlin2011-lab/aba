/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './blog/*.html', './*.js'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F7F2',
        'cream-dark': '#EFEDE6',
        'cream-darker': '#E5E2D8',
        charcoal: '#1A1A1A',
        'charcoal-soft': '#2C2C2C',
        gold: '#D4AF37',
        'gold-dark': '#B8941F'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'sans-serif']
      }
    }
  },
  plugins: []
}
