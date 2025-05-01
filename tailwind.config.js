module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    }
  },
  plugins: [],
};
