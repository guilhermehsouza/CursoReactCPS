function Menu({titulo}){
    return(
        <div class="border border-primary rounded m-1 p-1 mb-3 text-center">        
            <h1 class="display-1">{titulo ? titulo : ""}</h1>    
            <h3>Curso de React para Iniciantes</h3>
            
            <a class="btn btn-link" href="/">Home</a> &nbsp;
            <a class="btn btn-link" href="/sobre">Sobre</a> &nbsp;
            <a class="btn btn-success" href="/projeto">Projeto</a> &nbsp;
            <a class="btn btn-primary" href="/exemplo1">Exemplo 1</a> &nbsp;
            <a class="btn btn-primary" href="/exemplo2">Exemplo 2</a> &nbsp;
            <a class="btn btn-primary" href="/exemplo3">Exemplo 3</a> &nbsp;
        </div>
    )
}

export default Menu