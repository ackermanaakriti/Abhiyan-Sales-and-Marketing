/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'kurale':['kurale','serif']
      },
      colors: 
      {
        'primarycolor':'#690B0B',
        'secondarycolor':'#F0F0CF'
      }
    }
  },
  plugins: [],
}

