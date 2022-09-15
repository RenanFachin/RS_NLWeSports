// Importando o tailwind
import './styles/main.css'

// Importações de hooks do react
import { useState, useEffect } from 'react'

// Importando todos os componentes que vem da biblioteca Radix-ui e colocado dentro de um objeto
import * as Dialog from '@radix-ui/react-dialog'

// Importando a logo
import logoImg from './assets/logo-nlw-esports.svg'

// Importando componentes
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

//  Interface de como vem os dados da API
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  // Este código será executado sempre que o componente for exibido em tela
  const [games, setGames] = useState<Game[]>([])

  // Fazendo a chamada para a API
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json()) // transformando os dados que vieram da api em JSON
      .then(data => {
        setGames(data)
      })
  },[])


  return(
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>

      {/* Colocando a logo */}
      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui
      </h1>

      {/* Jogos */}
      <div className='grid grid-cols-6 gap-6 mt-16'>

        {/* Método MAP para percorrer um array e ir plotando os games que são retornados da API */}
        {games.map(game => {
          return(
            <GameBanner
            key={game.id} 
            title= {game.title} 
            bannerUrl={game.bannerUrl} 
            adsCount={game._count.ads} /> 
          )
        })}


      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

          <Dialog.Content>
            <Dialog.Title>Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              teste
            </Dialog.Content>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
