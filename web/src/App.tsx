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
import { Input } from './components/Form/Input'

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


              <form className='mt-8 flex flex-col gap-4'>

                <div className='flex flex-col gap-2'>
                   {/* htmlFor do label precisa ser igual ao id do input */}
                  <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                  <Input 
                  id='game'
                  placeholder='Selecione o game que deseja jogar'
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id="name" placeholder='Como te chamam dentro do game?'/>
                </div>

                {/* className='grid grid-cols-2 gap-6' = deixando um elemento ao lado do outro 
                está em grid pq ambas as div ocupam 50% do espaço
                */}
                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input id="yearsPlaying" type="number" placeholder='Tudo bem ser ZERO'/>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual seu discord?</label>
                    <Input id='discord' placeholder='Usuario#0000' />
                  </div>
                </div>

                <div className='flex gap-6'>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>


                    <div className='grid grid-cols-4 gap-2'>
                      <button 
                      title='Domingo'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        D
                      </button>

                      <button 
                      title='Segunda'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                      </button>

                      <button 
                      title='Terça'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        T
                      </button>

                      <button 
                      title='Quarta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        Q
                      </button>

                      <button 
                      title='Quinta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        Q
                      </button>

                      <button 
                      title='Sexta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                      </button>

                      <button 
                      title='Sábado'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                      </button>
                    </div>

                  </div>

                  {/* flex-1 vai fazer está div se ajustar dinamicamente conforme o espaço limite que ela tem */}
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input id="hourStart" type="time" placeholder='De'/>
                      <Input id="hourEnd" type="time" placeholder='Até'/>
                    </div>
                  </div>

                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <Input type="checkbox" /> Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  {/* Dialog.Close faz o botão ter um comportamento de fechar o forms */}
                  <Dialog.Close 
                    type='button'
                    className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                    >
                      Cancelar
                  </Dialog.Close>


                  {/* O botão com type submit é o que faz o envio do formulário */}
                  <button 
                    type='submit'
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                    >
                      <GameController size={24}/>
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
