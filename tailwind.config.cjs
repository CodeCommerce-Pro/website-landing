/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Onest', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      onest: ["Onest",'sans-serif'],

    },
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/typography")
    ],
    extend: {
      fontSize: {
      'ccp5xl': ['4rem', {
        lineHeight: '0.95',
        letterSpacing: '-0.03em',
        fontWeight: '500',
      }],
      'lgcpp': ['1.125rem', {
        lineHeight: '1.15',
        letterSpacing: '-0.03em',

      }],
      'smcpp': ['1.15rem', {
        lineHeight: '1.35',
        letterSpacing: '-0.03em',

      }],
      },
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