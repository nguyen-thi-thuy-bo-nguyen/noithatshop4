import { call, put, take } from "redux-saga/effects";
import OrderCartServices from "../../../services/api/OrderCartServices";
import { Creators } from "./OrderCarReducer";

export function* orderList() {
  while (true) {
    const { originalError, data, status } = yield call(
      OrderCartServices.getAllCart
    );
    console.log(originalError);

    if (!originalError) {
      yield put(Creators.addList(data));
      return data;
    }
    return;
  }
}
