import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function cliqueBotao(){
    alert('clicou no botão')
  }

  return (
    <>
      <div>
        <h1>Olá Mundo !!!</h1>   
        <p>
          <button onClick={cliqueBotao}>clique aqui</button>
        </p>
      </div>
     
    </>
  )
}

export default App
