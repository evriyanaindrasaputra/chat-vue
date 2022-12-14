/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'light': '#F2F2F2',
        'primary-one': '#2F80ED',
        'primary-two': '#4F4F4F',
        'primary-three': '#828282',
        'primary-four': '#E0E0E0',
        'indicator-one': '#F8B76B',
        'indicator-two': '#8785FF',
        'indicator-three': '#EB5757',
        'indicator-four': '#F2C94C',
        'chats-one': '#FCEED3',
        'chats-one-darken': '#E5A443',
        'chats-two': '#EEDCFF',
        'chats-two-darken': '#9B51E0',
        'chats-three': '#D2F2EA',
        'chats-three-darken': '#43B78D',
        'sticker-one': '#E9F3FF',
        'sticker-two': '#FDCFA4',
        'sticker-three': '#F9E9C3',
        'sticker-four': '#AFEBDB',
        'sticker-five': '#CBF1C2',
        'sticker-six': '#CFCEF9',
        'sticker-seven': '#F9E0FD',
      },
      keyframes: {
        'come-in': {
          '0%': { opacity: '0', transform: 'translateX(15px) ' },
          '50%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0px) ', opacity: '1' },
        },

      },
      animation: {
        'come-in': 'come-in 0.5s linear',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
