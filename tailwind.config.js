module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1366': '1366px',
        'button-w': '193px',
       },
       minWidth: {
         '1366': '1366px',
        },
      height: {
       '968': '968px',
       'button-h': '64px',
       'waves': '515px'
      },
      fontFamily: {
        'body': ['Montserrat']
      },
      letterSpacing: {
        widest: '.25em',
      },
      borderWidth: {
        '1': '1px',
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      backgroundImage: {
        'ship': "url('/ship.png')",
        'career-heading': "url('/careers-heading.png')",
        'button-outline': "url(/button-bg-okred-outline.png)",
        'button': "url(/button-bg-okred.png)",
        'waves': "url(/bg-waves.png)",
        'moon': "url(/bg-moon.png)",
        'contact': "url(/contact-bg.png)"
      },
      backgroundSize: {
        'ship-size': '1219px 707px',
        'career-heading-size': '2126px 968px',
        'button-size': '193px 64px',
        'waves-size': '2438px 515px',
        'moon-size': '960px 376px',
        'contact-size': '1337px 870px'
      },
   },
    colors: {
      oktransparent: 'transparent',
      okgray: '#1F2125',
      oklightgray: '#23272C',
      oklavishwhite: '#C2C2C2',
      okwhite: '#FFFFFF',
      okblack: '#000000',
      okred: '#F91616',
      oklightergray: '#494949',
      oktransparentorange: 'rgba(255, 131, 17, 0.1)',
      oktransparentgreen: 'rgba(17, 255, 141, 0.2)',
      oktransparentpurple: 'rgba(179, 17, 255, 0.1)',
      oktransparentred: 'rgba(249, 22, 22, 0.1)',
      oktransparentgreenblue: 'rgba(17, 184, 255, 0.1)',
      oktransparentyellow: 'rgba(255, 203, 17, 0.1)',
      oktransparentblue: 'rgba(17, 27, 255, 0.1)',
      oklightblue: '#c7cdd8',
      okdarkblue: '#3c475c'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
