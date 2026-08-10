/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        elevated: '#1a1a1a',
        elevated2: '#121212',
        elevated3: '#2F2F2F',
        accent: '#F8CF25',
        'accent-hover': '#ffd54f',
      },
      fontFamily: {
        sans:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        accent:  ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl:   '20px',
        '2xl':'24px',
        pill: '999px',
      },
      maxWidth: {
        container: '1040px',
      },
      opacity: {
        3:  '0.03',
        6:  '0.06',
        8:  '0.08',
        12: '0.12',
        14: '0.14',
        22: '0.22',
        35: '0.35',
        42: '0.42',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        70: '0.70',
        75: '0.75',
        80: '0.80',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        floatY2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        floatY3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        badgePop: {
          '0%':   { transform: 'rotate(4deg) scale(0.8)', opacity: '0' },
          '100%': { transform: 'rotate(4deg) scale(1)',   opacity: '1' },
        },
        progress: {
          from: { width: '0%' },
          to:   { width: '100%' },
        },
      },
      animation: {
        floatY:   'floatY 4s ease-in-out infinite',
        floatY2:  'floatY2 5s ease-in-out infinite',
        floatY3:  'floatY3 3.5s ease-in-out infinite',
        revealUp: 'revealUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        fadeIn:   'fadeIn 0.5s ease forwards',
        badgePop: 'badgePop 0.5s cubic-bezier(0.22,1,0.36,1) 0.4s forwards',
      },
    },
  },
  plugins: [],
}
