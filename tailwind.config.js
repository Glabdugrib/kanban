/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000112',
      'background': {
        light: '#F4F7FD',
        dark: '#20212C',
      },
      'darkGrey': '#2B2C37',
      'lines': {
        light: '#E4EBFA',
        dark: '#3E3F4E',
      },
      'grey': '#828FA3',
      'white': '#FFFFFF',
      'purple': {
        DEFAULT: '#635FC7',
        hover: '#A8A4FF',
      },
      'red': {
        DEFAULT: '#EA5555',
        hover: '#FF9898',
      },
    },
    extend: {},
  },
  plugins: [],
}

