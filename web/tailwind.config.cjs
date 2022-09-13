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
        galaxy: "url('/bg-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
    },
  },
  plugins: [],
}
