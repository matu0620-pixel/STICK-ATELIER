/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // STICK ATELIER brand palette (blue tones)
        atelier: {
          ink: '#1A2F4A',       // deep navy
          primary: '#2C4A6E',   // main blue
          mid: '#4A6B8C',       // mid blue
          muted: '#7A92AB',     // muted blue-gray
          tint: '#C4D0E0',      // light blue tint
          dark: '#1F2A38',      // cool dark text
          gray: '#5A6878',      // cool gray
          gold: '#C4A878',      // gold accent
          goldDark: '#B8956A',  // gold dark
          warn: '#B86F4F',      // warm orange
          paper: '#F1EFE5',     // cream BG
          paperLight: '#FAF8F1',// lighter cream
          border: '#D8D4C2',    // cream border
        },
      },
      fontFamily: {
        meiryo: ["'Meiryo UI'", 'メイリオ', 'Meiryo', "'Hiragino Sans'", "'ヒラギノ角ゴ ProN'", 'sans-serif'],
        serif: ["'Times New Roman'", 'serif'],
      },
    },
  },
  plugins: [],
};
