const buttonMedicamentos = document.querySelector("#medicamentos")
const remedios = document.querySelector(".remedios")

//variavel validação
const buttonEnviar = document.querySelector("button");
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");

//criando elemento p 
const pMensagem = document.createElement("p");

function clearForm(){
    campoNome.value = '';
    campoCidade.value = '';
}

//função validação
buttonEnviar.addEventListener("click", function(event) {
    event.preventDefault();
    if (campoNome.value === '') {
        pMensagem.textContent = "Preencha o campo nome"
        campoNome.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error")
        return false;
    }
    
    if (campoCidade.value === '') {
        pMensagem.textContent = "Preencha o campo cidade"
        campoCidade.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error")
        return false;
    }

    pMensagem.classList.add("d-none");
    clearForm();

})

//chamando medicamentos
buttonMedicamentos.addEventListener("click", function(){
    remedios.classList.add("d-block")
})
