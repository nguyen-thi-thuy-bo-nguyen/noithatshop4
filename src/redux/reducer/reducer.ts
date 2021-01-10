import { combineReducers } from "redux";
import { authReducer } from "./user/AuthReducer";
import { orderReducer } from "./user/OrderCarReducer";

const rootReducer = combineReducers({ auth: authReducer, order: orderReducer });
export default rootReducer;
