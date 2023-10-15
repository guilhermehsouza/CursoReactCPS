import Menu from "../pages/Menu"
import Exemplo1 from "./Exemplo1"
import Container from "./Container"

function Exemplo1_teste(){
  return (
    <div>
    <Menu titulo={"Exemplo 1"} />

    <Container conteudo={
      <div>
      
      
      <Exemplo1 cor="red"  />
      <Exemplo1 cor="blue" />
      <Exemplo1 cor="orangered"/>
      <Exemplo1 />
    </div>  
    } />
    </div>
  )
}

export default Exemplo1_teste