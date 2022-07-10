import React, { useEffect } from 'react'
import CardScreen from '../cards/CardScreen'
import BannerScreen from './BannerScreen'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  console.log(products)

  useEffect(()=>{
    dispatch(getAllProducts())
  }, [])

  return (
    <>
      <BannerScreen/>
      
      <div className='card-zone'>
        {products.map(product => <CardScreen product={product}/>)}
      </div>
    </>
  )
}

export default HomeScreen