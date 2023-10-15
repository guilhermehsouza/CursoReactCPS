function Exemplo2({nome, paragrafo, cor}){

    

    return (
        <div>
            <h1 style={{color:cor}}>Oi, eu sou o {nome ? nome : "Fulano"}</h1>
            {paragrafo ? 
                <p align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est porro mollitia quidem quisquam animi aperiam, unde, totam quibusdam esse dolorem error ex molestias dolorum voluptatem consequatur voluptate quasi, sunt atque.</p>
                :
                <p></p>
            }
        </div>
    )
}

export default Exemplo2