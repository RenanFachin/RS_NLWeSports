/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Definindo onde serão os locais que terão os arquivos html que vão conter classes do tailwind
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage:{
        // Fazendo o import do bg-galaxy.png e chamando ele de galaxy
        galaxy: "url('/bg-galaxy.png')"
      },
    },
  },
  plugins: [],
}
