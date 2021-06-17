import { createReducer, resettableReducer } from "reduxsauce";
import { createActions } from "reduxsauce";

export const orderState = {
  orderList: [],
  count: 0,
};

interface ActionsCreators {
  addList: (list: Array<any>) => any;
  orderRequest: () => any;
}

interface ActionsTypes {
  ADD_LIST: string;
  ORDER_REQUEST: string;
}
const { Types, Creators } = createActions<ActionsTypes, ActionsCreators>({
  addList: ["list"],
  orderRequest: null,
});

export const addList = (state = orderState, action: any) => {
  return Object.assign({}, state, {
    count: action.list.length,
    orderList: action.list,
  });
};

const HANDLERS = {
  [Types.ADD_LIST]: addList,
};
const orderReducer = createReducer(orderState, HANDLERS);

export { orderReducer, Types, Creators };
