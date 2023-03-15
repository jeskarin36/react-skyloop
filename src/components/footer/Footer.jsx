import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='App__Footer'>
        <div className='final flex__center'>
            <h3>SKYLOOP</h3>
            <p>Hecho por Jeskarin Martinez</p>
        </div>
        <div className='d flex__center'>
            <p>Acerca de Skyloop</p>
            <ul>
                <li><a href="">Acerca de</a></li>
                <li><a href="">Preguntas frecuentes Contacto</a></li>
            </ul>
        </div>
        <div className='d flex__center'>
            <p>Más información</p>
            <ul>
                <li><a href="">Envío y devoluciones</a></li>
                <li><a href="">Guía de tallas</a></li>
                <li><a href="">Tarjeta de regalo</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
