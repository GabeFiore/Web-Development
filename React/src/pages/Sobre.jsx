import Habilidades from "../Componentes/Habilidades/Habilidades";
import InfoPessoais from "./InfoPessoais";


function Sobre(){

    const infos = [
        {
            nome: "Gabriel",
            email: "gabriel@hotmail.com",
            telefone: "987-10"
        },
        {
            nome: "Mariana",
            email: "mariana@hotmail.com",
            telefone: "985-30"
        }
    ]

    return(
        <div className="mainInfo">
            <section id="info">
                <InfoPessoais usuarios={infos}/>
                <Habilidades nome="HTML" nivel="Avançado"/>  
            </section>
        </div>
    )
}
export default Sobre ;