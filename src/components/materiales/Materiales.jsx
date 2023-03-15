import React from 'react'
import "./Materiales.css"
import Img1 from "../../assets/photo-1551498624-3712f8e41930.avif"

const Materiales = () => {
  return (
    <div className='App__materiales'>
          <div className="App__materiales-right">
            <h3>MATERIALES SOSTENIBLES</h3>
            <div>
            <p>Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más. O bien, es posible que tengas un proyecto creativo para compartir con el mundo. Sea lo que sea, la manera en la que cuentes tu historia online puede marcar la diferencia. </p>
            </div>
           
        </div>
        <div className="App__materiales-letf flex__center">
            <img src={Img1} alt="" />
        </div>  
    </div>
  )
}

export default Materiales
