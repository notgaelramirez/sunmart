import React, { useRef } from 'react'
import logo from '/src/img/logo.png'
import { NavLink } from 'react-router-dom'

export const HeaderSceen = () => {

  const nav = useRef()
  console.log(nav)

  const onClickBrg = () =>{
    nav.current.classList.toggle('nav-open')
  }

  return (
    <header className='header'>
      <div className='first-area'>
        <div className='title-area'>
          <NavLink className='sunmart' to='/'>
            Sunmart
          </NavLink>
        </div>
        
        <div className='img-area'>
          <img src={logo} alt="" />
        </div>

      </div>

      <div className="burger-btn">
        <button onClick={onClickBrg}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <nav ref={nav} className='nav'>
        <ul className='nav-ul'>
          <li className='nav-li'>
            <NavLink onClick={onClickBrg} to='/login' className='nav-link'>
              <i className="fa-solid fa-user"></i>
              Login
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink onClick={onClickBrg} to='/purchases' className='nav-link'>
              <i className="fa-solid fa-list-check"></i>
              Purchases
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink onClick={onClickBrg} to='/cart' className='nav-link'>
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
