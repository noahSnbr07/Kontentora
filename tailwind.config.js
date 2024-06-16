/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

      //transparent, stack-able colors
      'transparent-0': 'rgba(255, 255, 255, 0)',
      'transparent-10': 'rgba(255, 255, 255, 0.1)',
      'transparent-50': 'rgba(255, 255, 255, 0.5)',

      //static non-transparent colors
      'white': 'white',
      'black': 'black',
      'accent': '#4187ff',

      //used to test components and see, if they are being displayed
      'debug-1': 'red',
      'debug-2': 'lime',
      'debug-3': 'blue',
    }
  },
  plugins: [],
}