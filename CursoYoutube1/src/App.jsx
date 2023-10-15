import Exemplo1 from "./Exemplo1"
import Exemplo2 from "./Exemplo2"
import Exemplo3 from "./Exemplo3"

function App(){
  return (
    <div>
      <Exemplo2 cor="red" nome="Gustavo" paragrafo={true} />
      <Exemplo2 cor="blue" nome="Felipe"/>
      <Exemplo2 cor="orangered"/>
      <Exemplo2 />
    </div>
  )
}

export default App