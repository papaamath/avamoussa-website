/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ava: {
          orange: '#FF6B00',
          'orange-dark': '#CC5500',
          'orange-light': '#FFF0E6',
          blue: '#0066CC',
          'blue-dark': '#004499',
          'blue-light': '#E6F0FF',
        },
      },
    },
  },
  plugins: [],
}