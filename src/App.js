import './App.css';
import Button from './Button.js'



const estilo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '5rem',
  color: '#fff',
  border: 'solid 1px red',
  margin: 'auto',
  padding: 'auto',
  fontStyle: 'italic',
  textShadow: '5px 5px 5px #c5c5c5',
  backgroundColor: '#f5f5f5',

}



const App = () => {
  const valor = 'triste'
  return (
    <div>
      <h1  className="App-logo" style={estilo} situacion={'ambivalente'}>valor de {valor}</h1>
      <Button onClick={() => console.log('clickeado')}>
        Enviar
      </Button>
    </div>
  )
}

export default App
