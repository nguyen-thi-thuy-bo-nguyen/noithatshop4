import { createReducer } from "reduxsauce";
import { createActions } from "reduxsauce";

export const productState = {
  productList: null,
  typeList: null,
};

interface ActionsCreators {
  getProductRequest: (payload?: any) => any;
  getProductSuccess: (list: any) => any;
  postProductRequest: (payload: any) => any;
  getProductTypeRequest: () => any;
}

interface ActionsTypes {
  GET_PRODUCT_REQUEST: string;
  GET_PRODUCT_SUCCESS: string;
  POST_PRODUCT_REQUEST: string;
  GET_PRODUCT_TYPE_REQUEST: string;
}
const { Types, Creators } = createActions<ActionsTypes, ActionsCreators>({
  getProductSuccess: ["list"],
  getProductRequest: ["payload"],
  postProductRequest: ["payload"],
  getProductTypeRequest: null,
});

export const addList = (state = productState, { list }: any) => {
  return Object.assign({}, state, list);
};

const HANDLERS = {
  [Types.GET_PRODUCT_SUCCESS]: addList,
};
const productReducer = createReducer(productState, HANDLERS);

export { productReducer, Types, Creators };
