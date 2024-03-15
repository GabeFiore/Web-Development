const listaFilmes = document.querySelector("#listaFilmes");
//let filmes = ["Carros", "Toy story", "Velozes e furiosos", "Nemo", "Titanic"]

let filmes = [{
    nome: "Carros",
    ano: 2006,
    nota: 10
},{
    nome: "Toy Story",
    ano: 2008,
    nota: 9
},{
    nome: "Velozes e furiosos",
    ano: 2008,
    nota: 9
},{
    nome: "Nemo",
    ano: 2005,
    nota: 8
},{
    nome: "Titanic",
    ano: 2000,
    nota: 8
}] 


filmes.push("Star Wars") //adiciona no array
filmes.pop() //remove o último elemento


window.onload = () => {
    for(let i=0; i < filmes.length; i++){
        let listaItem = document.createElement("li")
        listaFilmes.append(listaItem);
        listaItem.innerHTML = filmes[i].nome;

        let notaItem = document.createElement("li")
        listaFilmes.append(notaItem);
        notaItem.innerHTML = filmes[i].nota;
    }
}

filmes.forEach((i)=>{
    console.log(i.nome)
})

const btn1 = document.querySelector("button");
const itemLista = document.createElement('li');
const inputTexto = document.querySelector("#filmeInput")

btn1.addEventListener('click',()=>{
    listaFilmes.append(itemLista);
    itemLista.innerHTML = inputTexto.value
})