const initialState = {
  data: [],
  isLoading: false,
};

export const INIT_PROFILE_REQUEST = 'INIT_PROFILE_REQUEST';
export const INIT_PROFILE_FULFILLED = 'INIT_PROFILE_FULFILLED';
export const INIT_PROFILE_REJECTED = 'INIT_PROFILE_REJECTED';

export const profileRequest = () => ({
  type: INIT_PROFILE_REQUEST,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_PROFILE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case INIT_PROFILE_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    }

    case INIT_PROFILE_REJECTED: {
      return {
        ...state,
        isLoading: false,
        data: [],
      };
    }

    default: {
      return state;
    }
  }
}
