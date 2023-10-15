import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Exemplo1_teste from "./exemplos/Exemplo1_teste"
import Exemplo2_teste from "./exemplos/Exemplo2_teste"
import Exemplo3_teste from "./exemplos/Exemplo3_teste"
import Projeto from "./exemplos/Projeto"

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/exemplo1" element={<Exemplo1_teste />}/>
          <Route path="/exemplo2" element={<Exemplo2_teste />}/>
          <Route path="/exemplo3" element={<Exemplo3_teste />}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App