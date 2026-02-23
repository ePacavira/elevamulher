/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dourado-couro': '#D9A441',
        'mostarda': '#C48A2A',
        'marrom-escuro': '#4A2F1A',
        'verde-petroleo': '#2F6F67',
        'caramelo': '#E1B77A',
        'terracota': '#A65B3A',
        'bege-claro': '#F3E1C7',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


