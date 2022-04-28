import './App.css';
import Button from './Button.js'

const arr = [
  'Sergio feliz',
  'Sergio emocionado',
  'Sergio triste',
]

const App = () => {
  const miVariable = false

  if (miVariable) {
    return <p>Mi variable dio true!</p>
  }
  return (
    <div>
      <h1 className="App-logo" onClick={(e) => console.log('click', e)}>Hola Mundo</h1>
      {arr.map(el => <p className="lista" key={el}>{el}</p>)}
      <Button onClick={() => console.log('clickeado')}>
        Enviar
      </Button>
    </div>
  )
}

export default App
