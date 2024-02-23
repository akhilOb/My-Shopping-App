import { createSlice } from '@reduxjs/toolkit'

const productDetailsSlice = createSlice({
  name: 'productDetail',
  initialState: {
    isLoading : false,
    productDetails: {},
  },
  reducers: {
    getProductDetails: (state, action) => {
      console.log("coming inside the get productDetails ");
      state.productDetails = []
      state.isLoading = false
    },
    getProductDetailsSuccess: (state, action) => {
      console.log("coming inside the get productDetails success", action.payload);
      state.productDetails = action.payload[0]
      state.isLoading = false
    },
    getProductDetailsFailed: (state, action) => {
      console.log("coming inside the get productDetails failed");
      state.productDetails = action.payload
      state.isLoading = false
    },
  },
})
export default productDetailsSlice.reducer
export const {
  getProductDetails,
  getProductDetailsSuccess,
  getProductDetailsFailed
} = productDetailsSlice.actions
