import React from 'react'
import product from '/src/img/asador.jpg'

const CardScreen = () => {
  return (
    <article className='card'>
      <img src={product} alt="" />
      <p>Asador</p>
      <button>+</button>
    </article>
  )
}

export default CardScreen