// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  options: {
    safelist: ['your', 'whitelisted', 'classes', 'here'],
  },
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'grey':'#e5e7eb',
      'red': '#FE4365',
      'peach':'#FC9D9A',
      'pale-green':'#C8C8A9',
      'green': '#83AF9B',
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/forms'),
  ],
};
