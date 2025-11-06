// tailwind.config.js
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // adapte selon ton projet
    theme: {
      extend: {
        animation: {
          marquee: 'marquee 30s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { backgroundPosition: '0 0' },
            '100%': { backgroundPosition: '100% 0' },
          },
        },
      },
    },
    plugins: [],
  };
  