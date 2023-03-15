import React from 'react'
import "./Novedades.css"
import Img1 from "../../assets/eab5714021523e19a60fbf17d7b4a746.jpg"
import Img2 from "../../assets/d16489c4ecf3f87fb6837700d1ca14c3.jpg"
import Img3 from "../../assets/f4258d53633193f7193839ea280f0f03.jpg"
import Img4 from "../../assets/1ac0e8d97205fd3a4fc1982d83a37d04.jpg"
import Img5 from "../../assets/Stocksy_comp_3851777.jpg"

import Cuadro from "../../components/cuadro/Cuadro"

function Novedades() {
  return (
    <div className='App__novedades flex__center'>
        <h3>Novedades</h3>
        <div className='App__novedades-contenedor'>
           <Cuadro Img={Img1} title="Conjunto niña" price="60.00$" ofer="OFERTA"></Cuadro>
           <Cuadro Img={Img2} title="Suerter Rojo" price="10.00$"></Cuadro>
           <Cuadro Img={Img3} title="Pantalon oversize" price="20.00$"></Cuadro>
        </div>
        <button>Ver Novedades</button>
    </div>
  )
}

export default Novedades
