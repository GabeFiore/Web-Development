import Footer from './Componentes/Footer/footer'
import Header from './Componentes/Header/header'
import {Outlet} from 'react-router-dom'
import { useState } from 'react' // import novo
import { useEffect } from 'react' // import novo

function App() {
  
  const [contador, setContador] = useState(0) //[variavel, metodo pra atualizar a variavel] = valor inicial
  const [users, setUsers] = useState([])

  function aumentar(){
    setContador(contador + 1)
  }
  function diminuir(){
    setContador(contador - 1)
  }
  function zerar(){
    setContador(0)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
},[]) // ,[] = começa com um array vazio e vai adicionando e atualizando conforme tem nova informação

  return (
    <>
      <Header titulo="Site React"/>
      <Outlet/>
      
      <h1>CONTADOR</h1>
      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={zerar}>Zerar</button>


      <h1>USUÁRIOS</h1>
      {users.map((element)=>(

        // para imagens: <img key={element.id} src={element.url} alt={element.title} />
        <p key={element.id}> Nome: {element.name} <br /> 
        Username: {element.username} <br />
        Email: {element.email} <br />
        Telefone: {element.phone} <br />
        ------------------------
        </p>

      ))}

    
      <Footer/>

      
    </>
  )
}

export default App
