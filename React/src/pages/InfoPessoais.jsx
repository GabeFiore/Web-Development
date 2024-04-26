
function InfoPessoais({usuarios}){

    return(
            <div class="personal-info">
                <h2>Informações Pessoais</h2>
                {usuarios.map(usuario=>(
                    <>
                    <p>Nome:{usuario.nome}</p>
                    <p>Email:{usuario.email}</p>
                    <p>Telefone:{usuario.telefone}</p>
                    </>
                ))} 
            </div>
    )
}

export default InfoPessoais