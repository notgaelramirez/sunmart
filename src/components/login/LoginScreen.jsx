import React, { useEffect, useState } from 'react'
import FormScreen from './FormScreen'
import UserLogged from './UserLogged'

const LoginScreen = () => {

  const [token, setToken] = useState('')

  const changeToken = localStorage.getItem('token')

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [changeToken])
  

  return (
    <div>
      {
        token ?
          <UserLogged />
          :
          <FormScreen />
          
      }
    </div>
  )
}

export default LoginScreen