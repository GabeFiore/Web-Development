import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './pages/Sobre.jsx'
import Servicos from './pages/Servicos.jsx'
import Contato from './pages/Contato.jsx'
import ConteudoPrincipal from './Componentes/Conteudo-Principal/Conteudo-Principal.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<App/>,
      children:
      [
        {index:true, element: <ConteudoPrincipal/>},
        {path:'sobre', element:<Sobre/>},
        {path:'servicos', element:<Servicos/>},
        {path:'contato', element:<Contato/>},
        {path:'*', element: <PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
