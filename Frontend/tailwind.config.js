export default {
  content: [
    './index.html',
    './content/**/*.md',
    './content/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px'
    },
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      primary: {
        50: '#ebedff',
        100: '#e0e2ff',
        200: '#c2c2ff',
        300: '#a59eff',
        400: '#947cfe',
        500: '#895df8',
        600: '#8540ed',
        700: '#7a32d2',
        800: '#642aa7',
        900: '#542a84',
        950: '#0d0613'
      },
      secondary: {
        50: '#f5f7f8',
        100: '#dee3e9',
        200: '#bcc8d3',
        300: '#93a4b5',
        400: '#6d7e94',
        500: '#536379',
        600: '#404d61',
        700: '#36404f',
        800: '#2e3641',
        900: '#2a2e37',
        950: '#060709'
      }
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr'
      }
    }
  },
  corePlugins: {
    container: false,
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '1024px'
          },
          '@screen xl': {
            maxWidth: '1280px'
          },
          '@screen 3xl': {
            maxWidth: '1500px'
          }
        }
      })
    },
    require('@tailwindcss/aspect-ratio')
  ]
}
