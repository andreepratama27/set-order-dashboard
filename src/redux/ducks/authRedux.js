const initialState = {
  data: [],
  token: null,
  isLogin: false,
  isLoading: false,
  message: '',
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED';

export const loginRequest = data => ({
  type: LOGIN_REQUEST,
  data,
});

export const logoutRequest = () => ({type: LOGOUT_REQUEST});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case LOGIN_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.data,
        token: action.token,
      };
    }

    case LOGIN_REJECTED: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        data: [],
        token: null,
        message: action.message,
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOGOUT_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        data: [],
        token: null,
      };
    }

    default: {
      return state;
    }
  }
}
