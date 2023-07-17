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
        blueIntense: {
          50: "#60a5fa",
          100: "#3b82f6",
          200: "#2563eb",
          300: "#1d4ed8",
          500: "#1e3a8a",
        },
        orangeIntense: {
          50: "#fb923c",
          100: "#f97316",
          200: "#ea580c",
          300: "#c2410c",
          500: "#7c2d12",
        },
        emeraldIntense: {
          50: "#6ee7b7",
          100: "#34d399",
          200: "#10b981",
          300: "#059669",
          500: "#065f46",
        },
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
