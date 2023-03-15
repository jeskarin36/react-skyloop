import React from 'react'
import "./Cuadro.css"
function Cuadro({Img,title,price,ofer}) {
  return (
    <div className='App__novedades-card flex__center'>
        <div className='cuadro flex__center'> 
            {ofer==null ? null:  <div className='flex__center'>OFERTA</div> }
            <img src={Img} alt="" />
            <button>Vista Rapida</button>
        </div>
        <p className='t'>{title}</p>
        <p className='p'>{price}</p>
    </div>
  )
}

export default Cuadro
