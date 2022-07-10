import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productsSlice = createSlice({
  name:'Prod',
  initialState: [],
  reducers: {
    setProductsGlobal: (state, action) => action.payload
  }
})

export const { setProductsGlobal } = productsSlice.actions

export const getAllProducts = () => (dispatch) => {
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
  return axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}

export default productsSlice.reducer