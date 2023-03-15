import React from 'react'
import "./About.css"
import Img1 from "../../assets/photo-1611945440540-98c417ddabd3.avif"


const About = () => {
  return (
    <div className='App__about'>
        <div className="App__about-letf flex__center">
            <img src={Img1} alt="" />
        </div>  
        <div className="App__about-right">
            <h3>QUIÉNES SOMOS</h3>
            <div>
            <p>Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más. O bien, es posible que tengas un proyecto creativo para compartir con el mundo. Sea lo que sea, la manera en la que cuentes tu historia online puede marcar la diferencia. </p>
            </div>
            <button>Nuestra Historia</button>
        </div>
    </div>
  )
}

export default About
