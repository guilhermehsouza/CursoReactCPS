import Menu from "../pages/Menu"
import Exemplo2 from "./Exemplo2"

function Exemplo2_teste(){
  return (
    <div>
      <Menu titulo={"Exemplo 2"} />

      <Exemplo2 cor="red" nome="Guilherme" paragrafo={true} />
      <Exemplo2 cor="blue" />
      <Exemplo2 cor="orangered"/>
      <Exemplo2 />
    </div>
  )
}

export default Exemplo2_teste