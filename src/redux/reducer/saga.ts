import { all, takeLatest } from "redux-saga/effects";
import { Types } from "./user/AuthReducer";
import { Types as TypesOrder } from "./order_cart/OrderCarReducer";
import { Types as TypesProduct } from "./product/ProductReducer";

import { loginFlow } from "./user/AuthSagas";
import { orderList } from "./order_cart/OrderCartSaga";
import {
  productList,
  creatProduct,
  getProductType,
} from "./product/ProductSagas";

export default function* watcherLoginSaga() {
  yield takeLatest(Types.LOGIN, loginFlow);
  yield takeLatest(TypesOrder.ORDER_REQUEST, orderList);
  yield takeLatest(TypesProduct.GET_PRODUCT_REQUEST, productList);
  yield takeLatest(TypesProduct.POST_PRODUCT_REQUEST, creatProduct);
  yield takeLatest(TypesProduct.GET_PRODUCT_TYPE_REQUEST, getProductType);
}
