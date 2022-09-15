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

// Importando icons do phosphor-react
import { GameController } from 'phosphor-react'

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

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>


              <form className='mt-8'>

                <div className='flex flex-col gap-2'>
                   {/* htmlFor do label precisa ser igual ao id do input */}
                  <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                  <input 
                    id="game" 
                    placeholder='Selecione o game que deseja jogar'
                    className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                    />
                </div>

                <div>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <input id="name" placeholder='Como te chamam dentro do game?'/>
                </div>

                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <input id="yearsPlaying" type="number" placeholder='Tudo bem ser ZERO'/>
                  </div>

                  <div>
                    <label htmlFor="discord">Qual seu discord?</label>
                    <input id='discord' placeholder='Usuario#0000' />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    
                  </div>
                  <div>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div>
                      <input id="hourStart" type="time" placeholder='De'/>
                      <input id="hourEnd" type="time" placeholder='Até'/>
                    </div>
                  </div>
                </div>

                <div>
                  <input type="checkbox" /> Costumo me conectar ao chat de voz
                </div>

                <footer>
                  <button>Cancelar</button>
                  {/* O botão com type submit é o que faz o envio do formulário */}
                  <button type='submit'> 
                  <GameController />
                  Encontrar duo
                  </button>
                </footer>
              </form>


          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
