<<<<<<< HEAD
function Sobre() {
  return <h1>teste SOBRE</h1>;
=======
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
>>>>>>> 596bf312b4d0927b47ecdb0c1174e7cffcc39baf
}
export default Sobre;
