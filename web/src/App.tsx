// Importando o tailwind
import './styles/main.css'

// Importando a logo
import logoImg from './assets/logo-nlw-esports.svg'

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

    </div>
  )
}

export default App
