/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif']
    },
    extend: {
      zIndex: {
        100: 100,
      },

      keyframes: {
        show: {
          '0%, 49.99%': { opacity: 0, 'z-index': 10 },
          '50%, 100%': { opacity: 1, 'z-index': 50 },
        },
      },
      backgroundImage: theme => ({
        'light-background': 'url(\'https://todoappt.netlify.app/images/bg-desktop-light.jpg\')',
        'dark-background': 'url(\'https://todoappt.netlify.app/images/bg-desktop-dark.jpg\')',
        'mobile-light-background': 'url(\'/images/bg-mobile-light.jpg\')',
        'mobile-dark-background': 'url(\'/images/bg-mobile-dark.jpg\')'
      }),
      borderWidth: {
        '1': '1px'
      },
      letterSpacing: {
        widest: '.4em'
      },
      colors: {
        light_veryLightGrey: 'hsl(0, 0%, 98%)',
        light_veryLightGreyBlue: 'hsl(236, 33%, 92%)',
        light_lightGreyBlue: 'hsl(233, 11%, 84%)',
        light_darkGreyBlue: 'hsl(236, 9%, 61%)',
        light_veryDarkGreyBlue: 'hsl(236, 19%, 35%)',
        dark_veryDarkBlue: 'hsl(235, 21%, 11%)',
        dark_veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        dark_lightGreyBlue: 'hsl(234, 39%, 85%)',
        dark_lightGreyBlueHover: 'hsl(236, 33%, 92%)',
        dark_darkGreyBlue: 'hsl(234, 11%, 52%)',
        dark_veryDarkGreyBlue: 'hsl(233, 14%, 35%)',
        dark_veryDarkGreyBlue2: 'hsl(237, 14%, 26%)',
        brightBlue: 'hsl(220, 98%, 61%)',
        gray: "#d9d9d9",
      },
      padding: {
        '4.5': '1.125rem',
      },
      height: {
        '14.5': '3.625rem'
      },
      width: {
        '14.5': '3.625rem'
      },
      animation: {
        'spin-fast': 'spin 0.6s ease-out 1',
        show: 'show 0.7s',
      }
    },
    customForms: theme => ({
      default: {
        checkbox: {
          '&:checked': {
            backgroundImage: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
          },
          '&:hover:not(:checked)': {
            background: `
              linear-gradient(#fff, #fff) padding-box,
              linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box
            `,
            border: '1px solid transparent',
            borderRadius: '9999px',
          }
        }
      },
      dark: {
        checkbox: {
          '&:hover:not(:checked)': {
            background: `
              linear-gradient(hsl(235, 24%, 19%), hsl(235, 24%, 19%)) padding-box,
              linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box
            `,
            border: '1px solid transparent',
            borderRadius: '9999px',
          }
        }
      }
    })
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
      animation: ['hover'],
      visibility: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.filter-black': {
          filter: 'brightness(0%)',
        },
        '.filter-white': {
          filter: 'brightness(0%) invert(1)',
        },
        '.github': {
          '-webkit-mask': 'url(\'/images/github.svg\') no-repeat center',
          mask: 'url(\'/images/github.svg\') no-repeat center'
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover', 'dark'])
    })
  ],
}
