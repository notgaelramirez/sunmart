import React from 'react'
import product from '/src/img/asador.jpg'

const CardScreen = ({product}) => {
  return (
    <article className='card'>
      <img src={product.productImgs[0]} alt="" />
      <p>{product.title}</p>
      <button>+</button>
    </article>
  )
}

export default CardScreen