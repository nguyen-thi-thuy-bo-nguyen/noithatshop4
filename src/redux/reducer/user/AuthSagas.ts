import {
  call,
  take,
  put,
  fork,
  cancel,
  takeLatest,
  all,
} from "redux-saga/effects";
import {
  setItem,
  author,
  removeItem,
} from "../../../services/api/AuthServices";
import { Creators, Types } from "./AuthReducer";

function* authorize(username: string, password: string) {
  const { originalError, data, status } = yield call(
    author,
    username,
    password
  );
  console.log(data);
  console.log(originalError);

  if (originalError) {
    yield put(Creators.loginFailed({ error: originalError.message, status }));
    return;
  } else {
    console.log(data);

    yield put(Creators.loginSuccess(data.jwtToken));
    yield call(setItem, data.jwtToken);
    return data;
  }
}

export function* loginFlow() {
  while (true) {
    const { username, password } = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);

    const action = yield take([Types.RESET, Types.LOGIN_FAILED]);

    if (action.type === Types.RESET) {
      yield cancel(task);
    }
    yield call(removeItem);
  }
}
