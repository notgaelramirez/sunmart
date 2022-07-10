import { useState } from 'react'
import './App.css'
import { HeaderSceen } from './components/shared/HeaderSceen'
import {Routes, Route} from 'react-router-dom'
import BannerScreen from './components/home/BannerScreen'
import HomeScreen from './components/home/HomeScreen'
import LoginScreen from './components/login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartScreen from './components/cart/CartScreen'
import PurchasesScreen from './components/purchases/PurchasesScreen'

function App() {

  return (
    <div className="App">
      <HeaderSceen />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/purchases' element={<PurchasesScreen />}/>
        </Route>
      </Routes>  
    </div>
  )
}

export default App
