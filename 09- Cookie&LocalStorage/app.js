//cookie
document.cookie = "username=gabriel;expires=Fri, 27 Mar 2025 08:37;00 UTC; path=/;"
// localstorage: só aceita string 
let nome1 = "Gabriel"
localStorage.setItem("nome", nome1)
console.log(localStorage.getItem("nome"))
localStorage.removeItem ("nome")
// localstorage - JSON
let array = ["Gabriel", "Souza", "Fiore"]
const arrayJson = JSON.stringify(array)
localStorage.setItem("Lista Nomes", arrayJson)
JSON.parse(localStorage.getItem("array"))