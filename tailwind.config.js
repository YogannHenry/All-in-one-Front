const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"], // Incluez les fichiers HTML ici également
  theme: {
    extend: {
      colors: {
        brique: {
          50: "#f87171",
          100: "#ef4444",
          200: "#dc2626",
          300: "#b91c1c",
          500: "#7f1d1d",
          700: "#641717",
        },
        blueIntense: {
          50: "#60a5fa",
          100: "#3b82f6",
          200: "#2563eb",
          300: "#1d4ed8",
          500: "#1e3a8a",
          700: "#1a3175",
        },
        orangeIntense: {
          50: "#fb923c",
          100: "#f97316",
          200: "#ea580c",
          300: "#c2410c",
          500: "#7c2d12",
          700: "#431407",
        },
        emeraldIntense: {
          50: "#6ee7b7",
          100: "#34d399",
          200: "#10b981",
          300: "#059669",
          500: "#065f46",
          700: "#064e3b",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [Myclass, require("daisyui")], // Incluez "daisyui" ici
};
