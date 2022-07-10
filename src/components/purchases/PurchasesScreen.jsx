import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()


  const token = {
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(() =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, token)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>PurchasesScreen</div>
  )
}

export default PurchasesScreen