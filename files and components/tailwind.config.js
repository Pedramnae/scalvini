/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ppb : ['ppb'],
        ppm : ['ppm'],
        pps : ['pps'],
        ppbook: ['ppbook']
      },
      animation :{
        bottomToTop : 'bottomToTop 1s ease-out forwards',
        bottomToTop2 : 'bottomToTop 1s 0.2s ease-out forwards',
        bottomToTop3 : 'bottomToTop 1s 0.4s ease-out forwards',
        bottomToTop4 : 'bottomToTop 1s 0.6s ease-out forwards',
        op : 'op 1s 0.6s linear forwards'
      },
      keyframes :{
        bottomToTop :{
          '0%':{
            transform : 'translateY(100%)'
          },
          '100%':{
            transform : 'translateY(0%)'
          }
        },
        op :{
          '0%':{
            opacity : '0'
          },
          '100%' :{
            opacity : '1'
          }
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}
