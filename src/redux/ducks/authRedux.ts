import { reject } from "q";

const initialState = {
  isLogin: false,
  isLoading: false,
  token: null,
  data: []
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";

export const initLogin = (data: any) => ({ type: LOGIN_REQUEST, data });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case LOGIN_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        token: action.token,
        data: action.data
      };
    }

    case LOGIN_REJECTED: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        token: action.token
      };
    }

    default: {
      return state;
    }
  }
}
