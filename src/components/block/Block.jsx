import React from 'react'
import "./Block.css"
import Img1 from "../../assets/c6760c1a40aaa7d85375dd426bb2222e.jpg"
import Img2 from "../../assets/85c7f28a9acef9b47ca05dfa922a95d9.jpg"

function Block() {
  return (
    <div className='App__Block flex__center'>
        <div className='App__Block-letf flex__center'>
            <img src={Img1} alt="" />
            <button>Ver ropa de bebe</button>
        </div>
        <div className='App__Block-right flex__center'>
            <img src={Img2} alt="" />
            <button>Ver ropa de niños</button>
        </div>
    </div>
  )
}

export default Block
