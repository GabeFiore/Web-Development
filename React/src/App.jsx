<<<<<<< HEAD
import "./App.css";
import Footer from "./Componentes/Footer/footer";
import Header from "./Componentes/Header/header";
import { Outlet } from "react-router-dom";
=======
import Footer from './Componentes/Footer/footer'
import Header from './Componentes/Header/header'
import {Outlet} from 'react-router-dom'
import { useState } from 'react' // import novo
import { useEffect } from 'react' // import novo
>>>>>>> 596bf312b4d0927b47ecdb0c1174e7cffcc39baf

function App() {
  return (
    <>
      <Header titulo="Aula React" />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
