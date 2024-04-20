for(let i=0; i<5; i++){
    console.log("Agora i vale "+ i);
}

let frutas = ["banana", "pera", "maça", "laranja"];

console.log('--------')

// conta quantos itens tem no array
console.log(frutas.length);
//procura elementos no array
console.log(frutas)

console.log('-------')

for(let i=0; i<frutas.length; i++){
    console.log(`-${frutas[i]}`);
}

console.log('-------')

for (let fruta of frutas){
    console.log(fruta);
}