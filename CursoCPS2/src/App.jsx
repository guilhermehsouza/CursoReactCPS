import Titulo from "./componentes/Titulo.jsx"
function App(){

  const nome = "Guilherme H Souza";

  function soma(a, b)
  {
    return a+b;
  }

  function Carro(){
    return <h3>Eu sou um carro</h3>
  }

  function Caminhao()
  {
    return <h3>Eu sou um caminhão</h3>
  }

  return(
    <div className="App">
      <header className="App-header">
        {nome}
        <p>
          Edite o <code>src/App.js</code> e salve para recarregar.
        </p>
        <p>
          o resultado da soma é {soma(10,5)}
        </p>
        
        
      </header>
      <Caminhao />
       <Carro />

      <Titulo />
    </div>
  )
}

export default App