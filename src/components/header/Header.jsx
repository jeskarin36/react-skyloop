import React,{useState} from "react";
import "./Header.css"
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";
import Img2 from "../../assets/1041bcb742c30914f4d0928321bf0608.jpg"
import Img1 from "../../assets/7ccf7c397be68bd4df0fde4a49bec560.jpg"

const Header = () => {

    const [ToggleMenu,setToggleMenu]= useState(false);

    const Menu=()=>(
        <>
        <p><a href="#home">Servicios</a></p>
        <p><a href="#wgpt3">Equipos</a></p>
        <p><a href="#possibility">Higuiene y Seguidad</a></p>
        </>
    )

  return (
    <div className='App__header'>
        <nav className='App__navbar'>
        <div className="gpt3__navbar-menu">
                {ToggleMenu ? <RiCloseLine color="#e9ee63" size={27} onClick={()=>{setToggleMenu(false)}}/>
                : <RiMenu3Line color="#e9ee63" size={27} onClick={()=>{setToggleMenu(true)}}/>
                }

                {ToggleMenu && ( <div className="gpt3__navbar-menu_container scale-up-center">
                    <div className="gpt3__navbar-menu_container-links">
                    <Menu></Menu>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sing in</p>
                            <button type="button">Sing Up</button>
                        </div>
                    </div>
                </div>)}

                </div>
            <ul className='App__nav'>
                <li><a href="">Novedades</a></li>
                <li><a href="">Bebe</a></li>
                <li><a href="">Niño</a></li>
                <li><a href="">Ofertas</a></li>
                <li><a href="">Acerca de</a></li>
            </ul>
            <div className="App__navbar-logo flex__center">
                <h3>Skyloop</h3>
            </div>
            <ul className='App__navbar-redes'>
                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
            </ul>
             
        </nav>
        <div className="App__header-contenedor flex__center">
            <div className='App__header-contenedor-letf '>
                <div>
                    <img src={Img1} alt="" />
                    <h3>La Coleccion Jeskar</h3>
                </div>
            </div>
            <div className='App__header-contenedor-right flex__center'>
                <img src={Img2} alt="" />
                <button>Ver Colection Jeskar</button>
            </div>
        </div>
    </div>
  )
}

export default Header
