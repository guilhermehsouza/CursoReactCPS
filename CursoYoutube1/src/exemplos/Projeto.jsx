import Menu from "../pages/Menu";
import Container from "./Container";

export default function Projeto() {
    return(
        <div>
            <Menu titulo={"Sobre o Projeto"}/>

            <Container conteudo={
                <div>
                    <p>
                        Este curso foi realizado com base no video do "Curso de React Para Iniciantes" disponivel no <a href="https://www.youtube.com/watch?v=hd2B7XQAFls">youtube.</a>
                    </p>

                    <p>
                        Entretanto, com os conhecimentos já adquiridos previamente foram inseridos as classes do Bootstrap.
                    </p>
                </div>
            }/>
        </div>
    )
}