export default function Container({conteudo}){
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    {conteudo}
                </div>
            </div>
        </div>
    )
}

