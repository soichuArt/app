/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Geomanist', 'Inter', 'system-ui', 'sans-serif'],
        'serif': ['Geomanist', 'Inter', 'serif'],
        'geomanist': ['Geomanist', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'ultralight': '100',
        'thin': '200',
        'extralight': '250',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
      },
      colors: {
        soichu: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#ebe6dd',
          300: '#ddd4c5',
          400: '#ccbfa4',
          500: '#B29866', // Brand color
          600: '#a08856',
          700: '#8a7449',
          800: '#72603e',
          900: '#5d4f34',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf4e6',
          300: '#f5ead0',
          400: '#eedbb0',
          500: '#e4c788',
          600: '#d6b05a',
          700: '#c49a3d',
          800: '#a17f33',
          900: '#84682d',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b2a3',
          400: '#7a8f7a',
          500: '#5d735d',
          600: '#4a5c4a',
          700: '#3d4a3d',
          800: '#333d33',
          900: '#2c342c',
        },
        earth: {
          50: '#f9f7f4',
          100: '#f1ebe2',
          200: '#e2d5c4',
          300: '#cfb89e',
          400: '#ba9876',
          500: '#a87f5a',
          600: '#9a6f4e',
          700: '#805a42',
          800: '#684a39',
          900: '#553d30',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          250: '#e0e0e0', // Ultra-light gray
          300: '#d4d4d4',
          350: '#c8c8c8', // Extra light gray
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};