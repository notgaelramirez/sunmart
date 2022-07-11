import React from 'react'
import ItemScreen from './ItemScreen'

const CartScreen = () => {
  return (
    <article className='cart'>
      <header className='cart-header'>
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Shopping Cart</p>
      </header>

      <div className="items">
        <ItemScreen />
        <ItemScreen />
        <ItemScreen />
        <ItemScreen />
        <ItemScreen />
        <ItemScreen />
      </div>
    </article>
  )
}

export default CartScreen