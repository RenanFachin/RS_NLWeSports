// JSX: Javascript + XML (HTML)
// Componentes e Propriedades

// Definindo o que o botão vai receber como propriedade e o tipo de dado
// dessa forma ela é orbigatória   'title: string;' para ela ser opcional: 'title?: string;'
interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return(
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return(
    <div>
      <Button title='Enviar 1'/>
      <Button title='Enviar 2'/>
      <Button title='Enviar 3'/>
    </div>
  )
}

export default App
