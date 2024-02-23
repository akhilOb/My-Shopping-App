import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import instance from "../../api/api_instance";
import {   getAllCartSuccess, getAllCartFailed } from "./productDetailsSlice";

const getResponse = async (data) => {
  console.log(data, "Data in the saga");
  const result = {
    cart: null,
    err: null,
  };
  try {
    const response = await instance({
      url: `/cart`,
      method: "GET",
    });

    if (response) {
      console.log(
        "the response comijng inside the saga after getting cart",
        response
      );
      if (response.status === 200||response.status === 201) {
        result.cart = response;
      } else {
        result.err = response.data.error.message;
      }
    }
  } catch (err) {
    result.err = err.response.data.error.message;
  }
  return result;
};

function* getAllCart(action) {
  const { cart, err } = yield call(getResponse, action.payload);
  if (cart) {
    yield put(getAllCartSuccess(cart.data));
  } else {
    console.log(err);
    put(getAllCartFailed(err));
  }
}

function* getAllCartItemsSaga() {
  yield takeEvery("productDetail/getAllcart", getAllCart);
}

export default getAllCartItemsSaga;
