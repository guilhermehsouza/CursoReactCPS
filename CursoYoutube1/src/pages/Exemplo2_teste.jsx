import Menu from "./Menu"
import Exemplo2 from "../exemplos/Exemplo2"

function Exemplo2_teste(){
  return (
    <div>
      <h1>Exemplo 1</h1>
      <Menu />
      <Exemplo2 cor="red" nome="Guilherme" paragrafo={true} />
      <Exemplo2 cor="blue" />
      <Exemplo2 cor="orangered"/>
      <Exemplo2 />
    </div>
  )
}

export default Exemplo2_teste