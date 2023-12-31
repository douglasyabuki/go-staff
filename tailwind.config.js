/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      'darker-blue-90': '#002346',
      'dark-blue-80': '#004166',
      'gocn-blue-70': '#005F86',
      'blue-60': '#267798',
      'blue-50': '#4D8FAA',
      'blue-40': '#73A7BC',
      'blue-30': '#99BFCF',
      'blue-20': '#BFD7E1',
      'blue-10': '#E6EFF3',
      'darker-light-blue-90': '#003641',
      'dark-light-blue-80': '#005661',
      'gocn-light-blue-70': '#007582',
      'light-blue-60': '#268A95',
      'light-blue-50': '#4D9EA8',
      'light-blue-40': '#73B3BA',
      'light-blue-30': '#99C8CD',
      'light-blue-20': '#BFDCE0',
      'light-blue-10': '#E6F1F3',
      'darker-aqua-90': '#055B49',
      'dark-aqua-80': '#167A69',
      'gocn-aqua-70': '#279989',
      'aqua-60': '#47A89B',
      'aqua-50': '#68B8AC',
      'aqua-40': '#88C7BE',
      'aqua-30': '#A9D6D0',
      'aqua-20': '#C9E5E1',
      'aqua-10': '#E9F5F3',
      white: '#FFFFFF',
      'grey-5': '#F4F4F4',
      'grey-10': '#EEEEEE',
      'grey-15': '#DDDDDD',
      'grey-20': '#CCCCCC',
      'grey-30': '#B2B2B2',
      'grey-40': '#999999',
      'grey-50': '#7F7F7F',
      'grey-60': '#666666',
      'grey-70': '#4C4C4C',
      'grey-80': '#333333',
      'grey-90': '#191919',
      'gocn-grey-secondary': '#343A4090',
      'gocn-grey-primary': '#212529',
      'gocn-green-primary': '#63E6BE',
      'gocn-green-secondary': '#5CD1AD',
      black: '#000000',
      'bright-logo-green': '#D9F1E4',
      'medium-bright-logo-green': '#018132',
      'dark-bright-logo-green': '#34B26E',
      'yellow-20': '#F6EABF',
      'yellow-40': '#EBD073',
      'yellow-70': '#DAAA00',
      'light-neutral-blue': '#E0EEF4',
      'medium-neutral-blue': '#32A7D5',
      'dark-neutral-blue': '#0078A8',
      'light-bright-red': '#F5E1E2',
      'medium-bright-red': '#D63C43',
      'dark-bright-red': '#BC080D',
      'transparent-black': ' #19181F80',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      boxShadow: {
        'pt-s': '0px 5px 9px 0px rgba(0, 0, 0, 0.10)',
        'pt-m': ' 0px 3px 24px 0px rgba(0, 0, 0, 0.10)',
        'pt-l': ' 0px 10px 21px 0px rgba(0, 0, 0, 0.14);',
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
};
