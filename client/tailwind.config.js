/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#11131b',
          950: '#090b11',
        },
        olive: {
          700: '#55624a',
        },
      },
    },
  },
  plugins: [],
};
