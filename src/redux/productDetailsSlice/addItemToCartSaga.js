import { call, put, takeLatest } from "redux-saga/effects";
import instance from "../../api/api_instance";
import {   addItemToCartFailed, addItemToCartSuccess, getAllcart } from "./productDetailsSlice";

const getResponse = async (data) => {
  const result = {
    productDetails: null,
    err: null,
  };
  try {
    const response = await instance({
      url: `/cart`,
      method: "POST",
      data: data,
    });

    if (response) {
      if (response.status === 200||response.status === 201) {
        result.productDetails = response;
      } else {
        result.err = response.data.error.message;
      }
    }
  } catch (err) {
    result.err = err.response.data.error.message;
  }
  return result;
};

function* addToCart(action) {
  const { productDetails, err } = yield call(getResponse, action.payload);
  if (productDetails) {
    yield put(addItemToCartSuccess(productDetails.data));
    yield put(getAllcart(action.payload))
  } else {
    addItemToCartFailed(err)
  }
}

function* addItemToCartSaga() {
  yield takeLatest("productDetail/addItemToCart", addToCart);
}

export default addItemToCartSaga;
