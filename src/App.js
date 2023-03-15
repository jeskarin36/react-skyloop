import './App.css';
import Header from "./components/header/Header"
import Contenedor from "./components/contenedor/Contenedor"
import Block from "./components/block/Block"
import Fondo from "./components/fondo/Fondo"
import Novedades from "./components/novedades/Novedades"
import About from "./components/about/About"
import Materiales from "./components/materiales/Materiales"
import Form from "./components/form/Form"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Contenedor></Contenedor>
        <Block></Block>
        <Fondo></Fondo>
        <Novedades></Novedades>
        <About></About>
        <Materiales></Materiales>
        <Form></Form>
        <Footer></Footer>
    </div>
  );
}

export default App;
