/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,html}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#0E6F1E',
        customBlue: '#525B88',
        customGrey: '#697696'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('tw-elements/dist/plugin'),
    require('daisyui')
  ],
  daisyui: {
    themes: ['light']
  }
};
