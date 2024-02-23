import { call, put, takeEvery } from "redux-saga/effects";
import instance from "../../api/api_instance";
import {   getAllProductsSuccess, getAllProductsFailed } from "./productDetailsSlice";

const getResponse = async (data) => {
  console.log(data, "Data in the saga");
  const result = {
    products: null,
    err: null,
  };
  try {
    const response = await instance({
      url: `/products`,
      method: "GET",
    });

    if (response) {
      console.log(
        "the response comijng inside the saga after getting products",
        response
      );
      if (response.status === 200||response.status === 201) {
        result.products = response;
      } else {
        result.err = response.data.error.message;
      }
    }
  } catch (err) {
    result.err = err.response.data.error.message;
  }
  return result;
};

function* getAllProducts(action) {
  const { products, err } = yield call(getResponse, action.payload);
  if (products) {
    yield put(getAllProductsSuccess(products.data));
  } else {
    console.log(err);
    put(getAllProductsFailed(err));
  }
}

function* getAllProductsSaga() {
  yield takeEvery("productDetail/getAllProducts", getAllProducts);
}

export default getAllProductsSaga;
