import Topo from "./componentes/Topo";

export default function Home() {
    return (
        <div>
            <Topo />

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3 className="bg-success text-white text-center p-2">Administradores</h3>
                        <p></p>
                    </div>
                    <div className="col-sm-4">
                        <h3 className="bg-success text-white text-center p-2">Categorias</h3>
                        <p></p>
                    </div>
                    <div className="col-sm-4">
                        <h3 className="bg-success text-white text-center p-2">Produtos</h3>
                        <p></p>
                    </div>
                </div>
            </div>


        </div>
    );
}
