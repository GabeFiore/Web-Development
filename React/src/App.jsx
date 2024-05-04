import Footer from "./Componentes/Footer/footer";
import Header from "./Componentes/Header/header";
import { Outlet } from "react-router-dom";

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
