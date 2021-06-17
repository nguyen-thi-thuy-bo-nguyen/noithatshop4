import { call, put, take } from "redux-saga/effects";
import ProductServices from "../../../services/api/ProductServices";
import { Creators } from "./ProductReducer";

export function* productList({ payload }: any) {
  try {
    const { data, status } = yield call(() =>
      ProductServices.getAllProductByPage(payload)
    );

    yield put(
      Creators.getProductSuccess({
        productList: data,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export function* creatProduct({ payload }: any) {
  try {
    const { data, status } = yield call(() =>
      ProductServices.createProduct(payload)
    );

    yield put(Creators.getProductRequest());
  } catch (error) {
    console.log(error);
  }
}

export function* getProductType() {
  try {
    const { data, status } = yield call(() =>
      ProductServices.getAllProductType()
    );
    console.log(data);
    yield put(
      Creators.getProductSuccess({
        typeList: data,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export default { productList, creatProduct, getProductType };
