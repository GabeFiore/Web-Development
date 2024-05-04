import Habilidades from "../Habilidades/Habilidades";
import InfoPessoais from "../../pages/InfoPessoais";

function ConteudoPrincipal() {
  const infos = [
    {
      nome: " Gabriel",
      email: "gabriel@hotmail.com",
      telefone: "987-10",
    },
    {
      nome: " Messi",
      email: "messi@hotmail.com",
      telefone: "985-30",
    },
  ];

  return (
    <div className="mainInfo">
      <section id="info">
        <InfoPessoais usuarios={infos} />
        <Habilidades nome="HTML" nivel="Avançado" />
      </section>
    </div>
  );
}

export default ConteudoPrincipal;
