/** @type {import('tailwindcss').Config} */
// tailwind.config.js

const { info } = require('console');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind CSS가 적용될 파일 경로를 지정합니다.
  ],
  theme: {
    extend: {
      height: {
        header: '80px',
      },
      padding: {
        header: '80px',
      },
      colors: {
        neutral: {
          100: '#111',
          50: '#888',
          34: '#aeaeae',
          20: '#cfcfcf',
          12: '#e2e2e2',
          6: '#f1f1f1',
          3: '#f8f8f8',
          0: '#ffffff',
        },
        primary: {
          main: 'var(--color-primary-main)',
          surface: 'var(--color-primary-surface)',
          border: 'var(--color-primary-border)',
          hover: 'var(--color-primary-hover)',
        },
        secondary: {
          main: '#1185f2',
          opacity: 'rgba(17, 133, 242, 0.1)',
        },
        danger: {
          main: '#ff3b30',
          surface: '#ffebea',
          border: '#fda29b',
          hover: '#d70b00',
        },
        warning: {
          main: '#f79009',
          surface: '#fffaeb',
          border: '#fec84b',
          hover: '#b54708',
        },
        success: {
          main: '#12b76a',
          surface: '#ebfaee',
          border: '#6ce9a6',
          hover: '#027a48',
        },
        information: {
          main: '#007aff',
          surface: '#eaf4ff',
          border: '#6fa3ff',
          hover: '#0057f7',
          kakao: '#fae64d',
          green: '#34c759',
          yellow: '#ffcc00',
          step3: '#0033f3',
          step2: '#3998ff',
          step1: '#4dc8ec',
        },
        grey: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#d4d4d4',
          400: '#b3b3b3',
          500: '#949494',
          600: '#757575',
          700: '#525252',
          800: '#333333',
          900: '#171717',
        },
      },
      backgroundColor: {
        default: '#f7f5f1',
        surface: '#ffffff',
      },
      fontFamily: {
        body: ['Pretendard GOV Variable', 'sans-serif'],
      },
      fontSize: {
        xs: '11px',
        sm: '12px',
        ls: '13px',
        md: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '40px',
        '7xl': '48px',
        '8xl': '56px',
        '9xl': '64px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideDown: {
          from: { height: '0', overflow: 'hidden' },
          to: { height: '52px', overflow: 'visible' },
        },
        slideUp: {
          from: { height: '52px', overflow: 'hidden' },
          to: { height: '0', overflow: 'hidden' },
        },
        fadeDown: {
          from: { opacity: 0, transform: 'translateY(-16px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        rotation: 'rotation 1s linear infinite',
        slideDown: 'slideDown 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        fadeDown: 'fadeDown 0.5s ease-in-out',
      },
    },
    screens: {
      mobile: { max: '768px' },
    },
  },
  plugins: [],
};
