//alerta
alert("Ola Mundo!");

//imprimindo mensagem na tela
document.write("Gabriel Fiore");

//Usando o console
console.log("Oi tudo bem?")

//primeira variavel
let mensagem = "Ola mundo"
console.log("Este console é da variavel: " , mensagem);

//substitui um trecho do texto
let txt = "Estão chegando as provas";
console.log(txt.replace("provas", "avalicações"));
console.log(txt.toUpperCase());

//define o numero de casas decimais 
let num = 123.456;
console.log(num.toFixed(1));

// mudar o tipo da variavel
let numFloat = 123.456;
console.log(parseInt(numFloat))
// 
let numString = "123.456";
console.log(typeof parseFloat(numString));
//
let numFloat1 = 123.456;
let numString1 = String(numFloat1);
let verificar = typeof numString1;
//
let nomeAluno1 = "Gabriel" 
console.log(nomeAluno1.length)
//ele retorna a primeira posicao na string de um trecho de texto
let texto = "Estão chegando as provas";
console.log(txt.indexOf("as"));
//pega um trecho definido
console.log (txt.slice(0,5));
//posição inicial e a quantidade de caracteres que queremos pegar
console.log(txt.substr(6,8));

//EX 1
let tom = "Tom";
let firstTom = "Hanks";
let secondTom = "Cruise";
let myFavoriteTom = tom + ' ' + firstTom + ' ' + secondTom;
console.log(myFavoriteTom);

