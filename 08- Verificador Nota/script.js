const button = document.querySelector("button")
const inputNota = document.querySelector("#nota")

//criando elemento 
const pMensagem = document.createElement("p");

function clearForm(){
    inputNota.value = ""
}

button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputNotaValue = inputNota.value;

    if(inputNotaValue.trim() === ''){
        pMensagem.textContent = "SI FUDE MLK, ESCREVE ALGUMA COISA AÍ";
        inputNota.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return false;
    }

    if(inputNotaValue >= 6){
        alert ("TMj MLK FOI APROVADO!");
    } else {
        alert ("PQP, ESTUDA MAIS!");
    }

    pMensagem.classList.add("d-none");
    clearForm();

});