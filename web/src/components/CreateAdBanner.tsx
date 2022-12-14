// Importando do phosphor-react os ícones como componentes
import { MagnifyingGlassPlus } from 'phosphor-react'

// Importando todos os componentes que vem da biblioteca Radix-ui e colocado dentro de um objeto
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner(){
    return(
        // Borda do banner em gradient
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

                <Dialog.Trigger className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
                    <MagnifyingGlassPlus size={24}/>
                    Publicar anúncio
                </Dialog.Trigger>

            </div>
        </div>

    )
}