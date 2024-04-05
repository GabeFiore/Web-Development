import Contato from "../Form-Contato/Form-contato";
import Habilidades from "../Habilidades/Habilidades";
import InfoPessoais from "../InfoPessoais/InfoPessoais";

function ConteudoPrincipal(){

    return(
        <div className="mainInfo">
            <section id="info">
                <InfoPessoais/>
                <Habilidades/>
            </section>
            <Contato/>
        </div>
    )
}

export default ConteudoPrincipal