import { InputHTMLAttributes } from 'react'

// Fazendo o input aceitar todas as props padrões de um elemento html
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input(props: InputProps){
    return(
    <input
        {...props}
        id="game" 
        className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
    />
    )
}