import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <div className='App__form flex__center'>
        <div>
            <h3>NO TE LO PIERDAS.</h3>
            <p>Recibe información sobre nuevas colecciones, ofertas y mucho más.</p>
            <form action="">
                <input type="email" name="" id=""  placeholder='Correo Electronico'/>
                <input type="submit" value="Registrarse" />
            </form>
        </div>
    </div>
  )
}

export default Form
