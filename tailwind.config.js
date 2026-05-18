module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        hemere: {
          black: '#060606',
          white: '#ffffff',
          border: '#e8e8e1',
          footer: '#e8e8e1',
          btn: '#000000',
          'btn-text': '#ffffff',
          muted: '#6b6b6b',
          'light-gray': '#f5f5f3',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        heading: ['Proza Libre', 'sans-serif'],
      },
      fontSize: {
        'nav': ['12px', { lineHeight: '1.1', letterSpacing: '2.4px' }],
        'body-sm': ['12px', { lineHeight: '1.6', letterSpacing: '0.9px' }],
        'body-base': ['14px', { lineHeight: '1.6', letterSpacing: '0.9px' }],
        'h1': ['calc(29px * 0.85)', { lineHeight: '1.1', letterSpacing: '0.025em' }],
        'h2': ['calc(29px * 0.63)', { lineHeight: '1.1', letterSpacing: '0.025em' }],
        'h3': ['calc(29px * 0.57)', { lineHeight: '1.1', letterSpacing: '0.025em' }],
        'display': ['29px', { lineHeight: '1.1', letterSpacing: '0.025em' }],
      },
      maxWidth: {
        'page': '1500px',
        'page-narrow': '1000px',
      },
      spacing: {
        'gutter': '30px',
        'grid-gap': '22px',
      },
      borderRadius: {
        'product': '10px',
      },
      transitionTimingFunction: {
        'slide': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      transitionDuration: {
        'slide': '250ms',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
      },
    },
  },
  plugins: [],
};
