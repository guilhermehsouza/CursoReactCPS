import { useState } from "react"

function Exemplo3({cor}){

    const[texto, setTexto] = useState("Titulo Inicial");
    const[inputText,setInputText] = useState("");

    function clicou(){
        setTexto(inputText)
    }

    
    return (
        <div>
            <h1 style={{color:cor}}>{texto}</h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={clicou}>Clique</button>
            <button onClick={()=> {setTexto("Mudei via botão")}}>Mudar via botão</button>
            
        </div>
    )
}

export default Exemplo3