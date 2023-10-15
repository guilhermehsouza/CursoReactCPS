import Menu from "./Menu"
import Exemplo1 from "../exemplos/Exemplo1"


function Exemplo1_teste(){
  return (
    <div>
      <h1>Exemplo 1</h1>
      <Menu />
      <Exemplo1 cor="red"  />
      <Exemplo1 cor="blue" />
      <Exemplo1 cor="orangered"/>
      <Exemplo1 />
    </div>
  )
}

export default Exemplo1_teste