const initialState = {
  data: [],
  isLoading: false,
};

export const INIT_MENU_REQUEST = 'INIT_MENU_REQUEST';
export const INIT_MENU_FULFILLED = 'INIT_MENU_FULFILLED';
export const INIT_MENU_REJECTED = 'INIT_MENU_REJECTED';

export const ADD_MENU_REQUEST = 'ADD_MENU_REQUEST';
export const ADD_MENU_FULFILLED = 'ADD_MENU_FULFILLED';
export const ADD_MENU_REJECTED = 'ADD_MENU_REJECTED';

export const DELETE_MENU_BY_ID_REQUEST = 'DELETE_MENU_BY_ID_REQUEST';
export const DELETE_MENU_BY_ID_FULFILLED = 'DELETE_MENU_BY_ID_FULFILLED';
export const DELETE_MENU_BY_ID_REJECTED = 'DELETE_MENU_BY_ID_REJECTED';

export const menuRequest = () => ({
  type: INIT_MENU_REQUEST,
});

export const addMenuRequest = data => ({type: ADD_MENU_REQUEST, data});

export const deleteMenuById = id => ({
  type: 'DELETE_MENU_BY_ID_REQUEST',
  data: id,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_MENU_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case INIT_MENU_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    }

    case INIT_MENU_REJECTED: {
      return {
        ...state,
        isLoading: false,
        data: [],
      };
    }

    case DELETE_MENU_BY_ID_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case DELETE_MENU_BY_ID_FULFILLED: {
      let filtered = state.data.filter(v => v.id !== action.data);

      return {
        ...state,
        data: filtered,
      };
    }

    case DELETE_MENU_BY_ID_REJECTED: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ADD_MENU_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ADD_MENU_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.data],
      };
    }

    case ADD_MENU_REJECTED: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
}
