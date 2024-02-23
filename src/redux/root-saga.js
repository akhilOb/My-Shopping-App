import { all } from 'redux-saga/effects';
import productDetails from './productDetailsSlice/productDetailsSaga';
import addItemToCartSaga from "./productDetailsSlice/addItemToCartSaga";
import getAllCartItemsSaga from "./productDetailsSlice/getAllCartItemsSaga";
import getAllProductsSaga from "./productDetailsSlice/getAllProductsSaga";

function* watchAll() {
  yield all([
    productDetails(),
    addItemToCartSaga(),
    getAllCartItemsSaga(),
    getAllProductsSaga(),
  ])
}

export default watchAll