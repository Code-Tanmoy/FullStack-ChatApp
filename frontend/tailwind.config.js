// // tailwind.config.js
// import daisyui from "daisyui";

// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],
//   daisyui: {
//     themes: [
//       "light",
//       "dark",
//       "cupcake",
//       "bumblebee",
//       "emerald",
//       "corporate",
//       "synthwave",
//       "retro",
//       "cyberpunk",
//       "valentine",
//       "halloween",
//       "garden",
//       "forest",
//       "aqua",
//       "lofi",
//       "pastel",
//       "fantasy",
//       "wireframe",
//       "black",
//       "luxury",
//       "dracula",
//       "cmyk",
//       "autumn",
//       "business",
//       "acid",
//       "lemonade",
//       "night",
//       "coffee",
//       "winter",
//       "dim",
//       "nord",
//       "sunset",
//     ],
//   },
// };

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3b82f6",
          secondary: "#22c55e",
          accent: "#f97316",
          neutral: "#374151",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
        },
      },
      {
        dark: {
          primary: "#2563eb",
          secondary: "#16a34a",
          accent: "#d97706",
          neutral: "#111827",
          "base-100": "#1f2937",
          "base-200": "#111827",
          "base-300": "#1f2937",
          "base-content": "#f9fafb",
        },
      },
      {
        ocean: {
          primary: "#0ea5e9",
          secondary: "#06b6d4",
          accent: "#22d3ee",
          neutral: "#134e4a",
          "base-100": "#f0fdfa",
          "base-200": "#ccfbf1",
          "base-300": "#99f6e4",
          "base-content": "#083344",
        },
      },
      {
        sunset: {
          primary: "#f43f5e",
          secondary: "#f97316",
          accent: "#fb923c",
          neutral: "#7c2d12",
          "base-100": "#fff7ed",
          "base-200": "#ffedd5",
          "base-300": "#fed7aa",
          "base-content": "#431407",
        },
      },
      {
        forest: {
          primary: "#15803d",
          secondary: "#22c55e",
          accent: "#4ade80",
          neutral: "#14532d",
          "base-100": "#ecfdf5",
          "base-200": "#d1fae5",
          "base-300": "#a7f3d0",
          "base-content": "#052e16",
        },
      },
    ],
  },
};
