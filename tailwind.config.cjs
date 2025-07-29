/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Onest', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/typography")
    ],
    extend: {
       borderRadius: {
        '5xl': '500px',
       },
      colors: {
        'ccp-pink': '#ff4d61',
        'ccp-light-pink': '#FFF5F6',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}