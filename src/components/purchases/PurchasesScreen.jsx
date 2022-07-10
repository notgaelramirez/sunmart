import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQwMywiaWF0IjoxNjU3NDM5MjI4LCJleHAiOjE2NjI2MjMyMjh9.DagpcuDMNF7lMwy1zFzNHvpurmoYyCCpmdoLsml1jVk')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>PurchasesScreen</div>
  )
}

export default PurchasesScreen