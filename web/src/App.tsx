// Importando o tailwind
import './styles/main.css'

// Importando a logo
import logoImg from './assets/logo-nlw-esports.svg'

// Importando as imagens dos jogos (provisóriamente)
import game1 from './assets/game-1.png'
import game2 from './assets/game-2.png'
import game3 from './assets/game-3.png'
import game4 from './assets/game-4.png'
import game5 from './assets/game-5.png'
import game6 from './assets/game-6.png'

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

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game1} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white block'>League of Legends</strong>
            <span className='text-zinc-300 font-sm block'>4 anúncios</span>
          </div>
        </a>          

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game2} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white block'>Dota 2</strong>
            <span className='text-zinc-300 font-sm block'>4 anúncios</span>
          </div>
          
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game3} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 font-sm block'>4 anúncios</span>
          </div>
    
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game4} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 font-sm block'>4 anúncios</span>
          </div>
    
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game5} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white block'>Fortnite</strong>
            <span className='text-zinc-300 font-sm block'>4 anúncios</span>
          </div>
    
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game6} alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 font-sm block'>4 anúncios</span>
          </div>
  
        </a>

      </div>

    </div>
  )
}

export default App
