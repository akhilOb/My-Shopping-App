import { all } from 'redux-saga/effects';
import productDetails from './productDetailsSlice/productDetailsSaga';
import addItemToCartSaga from "./productDetailsSlice/addItemToCartSaga";
import getAllCartItemsSaga from "./productDetailsSlice/getAllCartItemsSaga";

function* watchAll() {
  yield all([
    productDetails(),
    addItemToCartSaga(),
    getAllCartItemsSaga(),
  ])
}

export default watchAll