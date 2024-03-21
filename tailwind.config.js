/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    colors: {
      'hc-blue-light': '#F7F9FF',
      'hc-blue-300': '#50A1FF',
      'hc-blue': '#2388FF',
      'hc-blue-dark': '#2463FF',
      'hc-blue-darker': '#003CD2',
      'hc-white': '#FFFFFF',
      'hc-black': '#000000',
      'hc-grayLight': '#EEEEEE',
      'hc-gray': '#D9D9D9',
      'hc-grayDark': '#585858',
      'hc-coral': '#FF6666'
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        mobile: '390px',
        '2xl': '1400px'
      }
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif']
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
