import React from 'react'
import "./Card.css"

function Card({Img,title,price,ofer}) {
  return (
    <div className='App__card'>
            {ofer==null ? null:  <div className='flex__center'>OFERTA</div> 

            }
            <img src={Img} alt="" />
            <p>{title}</p>
            <p>{price}</p>
            
    </div>
  )
}

export default Card
