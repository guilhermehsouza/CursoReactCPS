function Menu({titulo}){
    return(
        <div>        
            <h1 class="display-1">{titulo ? titulo : ""}</h1>    
            
            <a class="btn btn-danger" href="/Home">Home</a> &nbsp;
            <a class="btn btn-success" href="/Sobre">Sobre</a> &nbsp;
            <a class="btn btn-primary" href="/exemplo1">Exemplo 1</a> &nbsp;
            <a class="btn btn-primary" href="/exemplo2">Exemplo 2</a> &nbsp;
            <a class="btn btn-primary" href="/exemplo3">Exemplo 3</a> &nbsp;
            <hr />
        </div>
    )
}

export default Menu