import { call, put, take } from "redux-saga/effects";
import OrderCartServices from "../../../services/api/OrderCartServices";
import { Creators } from "./OrderCarReducer";

export function* orderList() {
  try {
    const { originalError, data, status } = yield call(
      OrderCartServices.getAllCart
    );

    if (!originalError) {
      yield put(Creators.addList(data));
      return data;
    }
  } catch (error) {
    return;
  }
}
