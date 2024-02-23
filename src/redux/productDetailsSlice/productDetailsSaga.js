import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import instance  from '../../api/api_instance'
import { getProductDetails, getProductDetailsSuccess} from './productDetailsSlice';

const getResponse = async (data) => {
  const result = {
    productDetails: null,
    err: null,
  }
  try {
    const response = await instance({url: `/products?id=123456`,method: 'GET',})

    if (response) {
      // console.log("the response comijng inside the saga", response);
      if (response.status === 200) {
        result.productDetails = response
      } else {
        result.err = response.data.error.message
      }
    }
  } catch (err) {
    result.err = err.response.data.error.message
  }
  return result
}

function* fetchProductDetails(action) {
  const { productDetails, err } = yield call(getResponse, action.payload)
  if (productDetails) {
    yield put(getProductDetailsSuccess(productDetails.data))
  } else {
    // console.log('failed to get users');
    console.log(err)
  }
}

function* productDetailsSaga() {
  yield takeEvery('productDetail/getProductDetails', fetchProductDetails)
  // yield takeLatest('users/createUser', createUser)
}

export default productDetailsSaga
