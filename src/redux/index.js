import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    thunk: false,
    immutableCheck: false,
    serializableCheck: false
  }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export default store;