import { combineReducers } from "redux";
import { authReducer } from "./user/AuthReducer";
import { orderReducer } from "./order_cart/OrderCarReducer";
import { productReducer } from "./product/ProductReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  product: productReducer,
});
export default rootReducer;
