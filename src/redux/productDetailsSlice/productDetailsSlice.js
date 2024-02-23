import { createSlice } from "@reduxjs/toolkit";

const productDetailsSlice = createSlice({
  name: "productDetail",
  initialState: {
    isLoading: false,
    productDetails: {},
    cart: [],
    allProducts: [],
  },
  reducers: {
    // get individual product Details
    getProductDetails: (state, action) => {
      state.productDetails = [];
      state.isLoading = true;
    },
    getProductDetailsSuccess: (state, action) => {
      state.productDetails = action.payload[0];
      state.isLoading = false;
    },
    getProductDetailsFailed: (state, action) => {
      state.productDetails = action.payload;
      state.isLoading = false;
    },
    //update cart
    addItemToCart: (state, action) => {
      state.isLoading = true;
    },
    addItemToCartSuccess: (state, action) => {
      state.isLoading = false;
    },
    addItemToCartFailed: (state, action) => {
      state.isLoading = false;
    },
    //getCart
    //update cart
    getAllcart: (state, action) => {
      state.isLoading = true;
    },
    getAllCartSuccess: (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    getAllCartFailed: (state, action) => {
      state.isLoading = false;
    },
    //get All products
    getAllProducts: (state, action) => {
      state.isLoading = true;
    },
    getAllProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    getAllProductsFailed: (state, action) => {
      state.isLoading = false;
    },
  },
});
export default productDetailsSlice.reducer;
export const {
  getProductDetails,
  getProductDetailsSuccess,
  getProductDetailsFailed,

  addItemToCart,
  addItemToCartSuccess,
  addItemToCartFailed,

  getAllcart,
  getAllCartSuccess,
  getAllCartFailed,

  getAllProducts,
  getAllProductsSuccess,
  getAllProductsFailed,

} = productDetailsSlice.actions;
