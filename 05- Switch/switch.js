// Switch é uma estrutura de decisão que não trabalha com 
// condições "verdadeiras ou falsas", mas sim com valores diretos
let teste = 2;
switch (teste){
    case 1:
        console.log("Foi de primeira!");
        break;
    case 2:
        console.log("Foi na segunda!");
        break;
    default:
        console.log ("Não foi nem na primeira nem na segunda!");
}

//default é parecido com o else