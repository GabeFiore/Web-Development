const buttonMedicamentos = document.querySelector("#medicamentos");
const remedios = document.querySelector(".remedios");

const buttonEnviar = document.querySelector("button");
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");

const pMensagem = document.createElement("p");

function clearForm() {
  campoNome.value = "";
  campoCidade.value = "";
}

buttonEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  if (campoNome.value === "") {
    pMensagem.textContent = "Preencha o campo nome";
    campoNome.insertAdjacentElement("afterend", pMensagem);
    pMensagem.setAttribute("class", "error");
    return false;
  }

  if (campoCidade.value === "") {
    pMensagem.textContent = "Preencha o campo cidade";
    campoCidade.insertAdjacentElement("afterend", pMensagem);
    pMensagem.setAttribute("class", "error");
    return false;
  }

  pMensagem.classList.add("hidden");
  clearForm();
});

buttonMedicamentos.addEventListener("click", function () {
  remedios.classList.remove("hidden");
});
