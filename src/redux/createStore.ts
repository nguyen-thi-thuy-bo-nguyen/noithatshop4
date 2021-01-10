import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer/reducer";
import saga from "./reducer/saga";
const initialSagaMiddleware = createSagaMiddleware();
const middleware = [initialSagaMiddleware];

const store = configureStore({ reducer: rootReducer, middleware });
initialSagaMiddleware.run(saga);

export default store;
