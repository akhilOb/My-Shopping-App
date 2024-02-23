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
      // console.log("coming inside the get productDetails ");
      state.productDetails = [];
      state.isLoading = true;
    },
    getProductDetailsSuccess: (state, action) => {
      // console.log(
      //   "coming inside the get productDetails success",
      //   action.payload
      // );
      state.productDetails = action.payload[0];
      state.isLoading = false;
    },
    getProductDetailsFailed: (state, action) => {
      // console.log("coming inside the get productDetails failed");
      state.productDetails = action.payload;
      state.isLoading = false;
    },
    //update cart
    addItemToCart: (state, action) => {
      console.log(action, "coming inside slice");
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
      console.log(action, "coming inside slice get cart");
      state.isLoading = true;
    },
    getAllCartSuccess: (state, action) => {
      console.log(action, "data in the success get cart");
      state.isLoading = false;
      state.cart = action.payload;
    },
    getAllCartFailed: (state, action) => {
      state.isLoading = false;
    },
    //get All products
    getAllProducts: (state, action) => {
      console.log(action, "coming inside slice get cart");
      state.isLoading = true;
    },
    getAllProductsSuccess: (state, action) => {
      console.log(action, "data in the success get cart");
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
