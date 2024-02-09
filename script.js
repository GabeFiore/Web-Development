function calculoIMC(){
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    console.log (peso,altura)


var imc = peso / (altura * altura);
var mensagem;


if (imc < 18.5) {
    mensagem = "Abaixo do Peso";
 } else if (imc < 25) {
    mensagem = "Peso Normal";
 } else if (imc < 30) {
    mensagem = "Sobrepeso";
 }else {
    mensagem = "Obesidade"
 }

document.getElementById('resultado').innerHTML = 'Seu IMC é ' + imc.toFixed(2) + '<br>Resultado: ' + mensagem;
}