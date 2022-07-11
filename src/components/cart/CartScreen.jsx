import React from 'react'
import ItemScreen from './ItemScreen'

const CartScreen = () => {

  const items = [1,2]

  return (
    <article className='cart'>
      <header className='cart-header'>
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Shopping Cart</p>
      </header>

      <div className="items">
        {items.map(item => <ItemScreen />)}
      </div>
    </article>
  )
}

export default CartScreen