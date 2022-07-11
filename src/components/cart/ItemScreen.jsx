import React from 'react'

const ItemScreen = () => {
  return (
    <div className='item'>
      <div className='item-photo'>
        Hola
      </div>

      <div className='item-aside'>
        <div className='item-info'>
          Hola
        </div>

        <div className='item-buttons'>
          <div className="item-quantity">
            <div>
              <i className="fa-solid fa-minus"></i>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-trash item-delete"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemScreen