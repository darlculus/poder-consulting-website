/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0ff',
          100: '#c5d8ff',
          200: '#9dbeff',
          300: '#6fa0ff',
          400: '#3d7eff',
          500: '#0B5FFF',
          600: '#0B5FFF',
          700: '#0047d6',
          800: '#0035a3',
          900: '#002470',
        },
        accent: {
          50: '#f7f9f0',
          100: '#eef2dc',
          200: '#dde5bd',
          300: '#c8d494',
          400: '#b3c36f',
          500: '#8ead31',
          600: '#7a9629',
          700: '#677e21',
          800: '#54661a',
          900: '#425014',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
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
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
