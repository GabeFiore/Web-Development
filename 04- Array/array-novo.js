const numeros = ["ola", 10, true, {}]
console.log(numeros)
//desestruturação
const [saudacao, numero, booleano, objeto]= numeros
console.log(saudacao)
//rest e spread 
"...resto"
"...clone"

//mudar o valor do array
numeros[1] = 8
//descobrir o tamanho do array
console.log(numeros.length)