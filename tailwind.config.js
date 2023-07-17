module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brique: {
          50: "#f87171",
          100: "#ef4444",
          200: "#dc2626",
          300: "#b91c1c",
          500: "#7f1d1d",
        },
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
