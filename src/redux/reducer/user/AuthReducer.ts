import { createReducer, resettableReducer } from "reduxsauce";
import { createActions } from "reduxsauce";

const resettable = resettableReducer("RESET");

export const authState = {
  token: "",
  errorMessage: "",
};

interface ActionsCreators {
  loginRequest: (username: string, password: string) => any;
  login: () => any;
  reset: () => any;
  loginSuccess: (token: any) => any;
  loginFailed: (error: any) => any;
}

interface ActionsTypes {
  LOGIN_REQUEST: string;
  LOGIN: string;
  RESET: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILED: string;
}
const { Types, Creators } = createActions<ActionsTypes, ActionsCreators>({
  loginRequest: ["username", "password"],
  login: null,
  reset: null,
  loginSuccess: ["token"],
  loginFailed: ["error"],
});

export const loginSuccess = (state = authState, action: { token: any }) => {
  return { errorMessage: "", token: action.token };
};
export const loginFailed = (state = authState, action: { error: any }) => {
  return { token: "", errorMessage: action.error };
};

const HANDLERS = {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILED]: loginFailed,
};
const authReducer = resettable(createReducer(authState, HANDLERS));

export { authReducer, Types, Creators };
