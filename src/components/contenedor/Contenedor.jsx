import React from 'react'
import "./Contenedor.css"
import Card from "../../components/card/Card"
import Img1 from "../../assets/eab5714021523e19a60fbf17d7b4a746.jpg"
import Img2 from "../../assets/d16489c4ecf3f87fb6837700d1ca14c3.jpg"
import Img3 from "../../assets/f4258d53633193f7193839ea280f0f03.jpg"
import Img4 from "../../assets/1ac0e8d97205fd3a4fc1982d83a37d04.jpg"
import Img5 from "../../assets/Stocksy_comp_3851777.jpg"



const Contenedor = () => {
  return (
    <div className='App__contenedor flex__center'>
   
        <Card Img={Img1} title="Camiseta Miami" price="25,00 €" ofer="OFERTA"></Card>
        
        <Card Img={Img2} title="Camiseta Fresh" price="22,00 €"></Card>
        <Card Img={Img3} title="Conjunto " price="42,00 €"></Card>
        <Card Img={Img4} title="Conjunto" price="40,00 €"></Card>
        <Card Img={Img5} title="Vestido Arlie" price="40,00 €"></Card>
    </div>
  )
}

export default Contenedor
