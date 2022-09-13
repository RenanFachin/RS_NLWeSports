// Importando o tailwind
import './styles/main.css'

// Importando a logo
import logoImg from './assets/logo-nlw-esports.svg'

function App() {
  return(
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      {/* Colocando a logo */}
      <img src={logoImg} />
    </div>
  )
}

export default App
