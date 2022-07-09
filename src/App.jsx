import { useState } from 'react'
import './App.css'
import { HeaderSceen } from './components/shared/HeaderSceen'
import {Routes, Route} from 'react-router-dom'
import BannerScreen from './components/home/BannerScreen'
import HomeScreen from './components/home/HomeScreen'

function App() {

  return (
    <div className="App">
      <HeaderSceen />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>  
    </div>
  )
}

export default App
