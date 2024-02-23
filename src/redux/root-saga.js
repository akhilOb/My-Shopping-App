import { all } from 'redux-saga/effects'
import productDetails from './productDetailsSlice/productDetailsSaga'


function* watchAll() {
  yield all([
    productDetails(),
  ])
}

export default watchAll
