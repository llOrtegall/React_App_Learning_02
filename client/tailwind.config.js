/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        jaxx: {
          50: '#eef7ff',
          100: '#d8edff',
          200: '#bae0ff',
          300: '#8aceff',
          400: '#53b3ff',
          500: '#2b90ff',
          600: '#2279fc',
          700: '#0d59e8',
          800: '#1248bb',
          900: '#154193',
          950: '#122859'
        }

      }
    }
  },
  plugins: []
}
