// Importando o tailwind
import './styles/main.css'

// Importando a logo
import logoImg from './assets/logo-nlw-esports.svg'

// Importando componentes
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

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

      <CreateAdBanner />

    </div>
  )
}

export default App
