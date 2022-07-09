import React from 'react'
import CardScreen from '../cards/CardScreen'
import BannerScreen from './BannerScreen'

const HomeScreen = () => {
  return (
    <>
      <BannerScreen/>
      
      <div className='card-zone'>
        <CardScreen />
        <CardScreen />
        <CardScreen />
        <CardScreen />
      </div>
    </>
  )
}

export default HomeScreen