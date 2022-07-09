import React from 'react'
import logo from '/src/img/logo.png'

export const HeaderSceen = () => {
  return (
    <header className='header'>
      <div className='first-area'>
        <div className='title-area'>
          <h1>Sunmart</h1>
        </div>
        
        <div className='img-area'>
          <img src={logo} alt="" />
        </div>

      </div>

      <div className="burger-btn">
        <button>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <nav className='nav'>
        <ul className='nav-ul'>
          <li className='nav-li'>Login</li>
          <li className='nav-li'>Purchases</li>
          <li className='nav-li'>Cart</li>
        </ul>
      </nav>
    </header>
  )
}
