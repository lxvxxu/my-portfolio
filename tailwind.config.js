/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src 폴더 내의 모든 JS/JSX 파일을 스캔
  ],
  theme: {
    extend: {
      fontFamily: {
        // Inter 폰트가 설치되어 있지 않더라도, fallback을 위해 추가
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      colors: {
        'lime-400': '#a3e635',
        'zinc-950': '#09090b',
        'zinc-900': '#18181b',
        'zinc-800': '#27272a',
      }
    },
  },
  plugins: [],
}