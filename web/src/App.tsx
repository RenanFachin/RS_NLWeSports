// Importando o tailwind
import './styles/main.css'

// Importando a logo
import logoImg from './assets/logo-nlw-esports.svg'

// Importando componentes
import { GameBanner } from './components/GameBanner'

// Importando as imagens dos jogos (provisóriamente)
import game1 from './assets/game-1.png'
import game2 from './assets/game-2.png'
import game3 from './assets/game-3.png'
import game4 from './assets/game-4.png'
import game5 from './assets/game-5.png'
import game6 from './assets/game-6.png'

// Importando do phosphor-react os ícones como componentes
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return(
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      {/* Colocando a logo */}
      <img 
      src={logoImg} 
      />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui
      </h1>

      {/* Jogos */}
      <div className='grid grid-cols-6 gap-6 mt-16'>

        <GameBanner banenrUrl={game1} title='League of Legends' adsCount={5} /> 
        <GameBanner banenrUrl={game2} title='Dota 2' adsCount={3} /> 
        <GameBanner banenrUrl={game3} title='CS:GO' adsCount={1} /> 
        <GameBanner banenrUrl={game4} title='Apex' adsCount={10} /> 
        <GameBanner banenrUrl={game5} title='Fortnite' adsCount={5} /> 
        <GameBanner banenrUrl={game6} title='World of Warcraft' adsCount={5} /> 

      </div>

      {/* Borda do banner em gradient */}
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>

        {/* Banner */}
        <div className='bg-[#2A2534] px-8 py-6 flex justify-between items-center'>

          <div>
            <strong className='text-2xl text-white font-black block'>
              Não encontrou seu duo?
            </strong>

            <span className='text-zinc-400 block'>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button 
          className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>

        </div>
      </div>

    </div>
  )
}

export default App
