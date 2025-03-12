/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js}'],
  theme: {
    extend: {
      textOutline: {
        'outline': 'yellow'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtil = {
        '.text-outline': {
          '-webkit-text-stroke': '0.8px rgba(42, 42, 41, 0.8)', // Замените на нужный вам цвет и размер обводки
          // 'color': 'transparent',
        },
        '.text-under-outline': {
          '-webkit-text-stroke': '0.8px black', // Замените на нужный вам цвет и размер обводки
        }
      }
      addUtilities(newUtil, ['responsive', 'hover'])
    }
  ],
}