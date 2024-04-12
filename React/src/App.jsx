import './App.css'
import ConteudoPrincipal from './Componentes/Conteudo-Principal/Conteudo-Principal'
import Footer from './Componentes/Footer/footer'
import Header from './Componentes/Header/header'
import {Outlet} from 'react-router-dom'
function App() {

  return (
    <>
      <Header titulo="Site React"/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
