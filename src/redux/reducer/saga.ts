import { all, takeLatest } from "redux-saga/effects";
import { Types } from "./user/AuthReducer";
import { Types as TypesOrder } from "./user/OrderCarReducer";

import { loginFlow } from "./user/AuthSagas";
import { orderList } from "./user/OrderCartSaga";

export default function* watcherLoginSaga() {
  yield takeLatest(Types.LOGIN, loginFlow);
  yield takeLatest(TypesOrder.ORDER_REQUEST, orderList);
}
