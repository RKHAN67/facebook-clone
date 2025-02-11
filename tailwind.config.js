/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Font Family
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      // Text Color
      colors: {
        customGreen: {
          default: '#AAC433',
          100: '#EFF4D8',
        },
        customBlack: {
          default: '#222222',
          100: '#7C7C7C',
          200: '#2B2B2B',
          300: '#262427',
        },
        customGrey: {
          100: '#7C7C7C',
          200: '#6A7980',
        },
      },

      // Background Color
      backgroundColor: {
        customGreen: {
          default: '#AAC433',
          100: '#EFF4D8',
        },
        customBlack: {
          default: '#222222',
          100: '#7C7C7C',
          200: '#2B2B2B',
        },
        customBlue: {
          default: '#48B6CF',
          100: '#8CCFDB',
        },
        customGrey: {
          default: '#f5f5f5',
          100: '#6D6A6B',
        },
      },

      boxShadow: {
        customShadow: 'rgb(0 0 0 / 14%) 0px 0px 24px',
        customShadow2: 'rgb(0 0 0 / 18%) 0px 0px 90px',
      },

      //gradients
      backgroundImage: {
        'footer-links-gradient':
          'linear-gradient(to right, #22222280, #AAC43380, #22222280)',
        'universal-hero-section-gradient':
          'linear-gradient(to bottom, #FFFFFF, #F5FFC6)',
        'hero-section-gradient': 'linear-gradient(to top, #FFFFFF, #F5FFC6)',
        'calculator-input-gradient':
          'linear-gradient(to right, #C3C4C6, #B1B2B4)',
        'testimonial-carousel-gradient':
          'linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))',
        'testimonial-carousel-gradient2':
          'linear-gradient(to left, rgb(255, 255, 255), rgba(230, 227, 227, 0))',
      },
      transform: ['group-hover'],
    },
    fontSize: {
      xs: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
    },
  },
  plugins: [],
};
