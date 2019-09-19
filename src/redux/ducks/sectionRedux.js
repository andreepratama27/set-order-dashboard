const initialState = {
  data: [],
  isLoading: false,
};

export const INIT_SECTION_REQUEST = 'INIT_SECTION_REQUEST';
export const INIT_SECTION_FULFILLED = 'INIT_SECTION_FULFILLED';
export const INIT_SECTION_REJECTED = 'INIT_SECTION_REJECTED';

export const ADD_SECTION_REQUEST = 'ADD_SECTION_REQUEST';
export const ADD_SECTION_FULFILLED = 'ADD_SECTION_FULFILLED';
export const ADD_SECTION_REJECTED = 'ADD_SECTION_REJECTED';

export const DELETE_SECTION_BY_ID_REQUEST = 'DELETE_SECTION_BY_ID_REQUEST';
export const DELETE_SECTION_BY_ID_FULFILLED = 'DELETE_SECTION_BY_ID_FULFILLED';
export const DELETE_SECTION_BY_ID_REJECTED = 'DELETE_SECTION_BY_ID_REJECTED';

export const sectionRequest = () => ({
  type: INIT_SECTION_REQUEST,
});

export const addSectionRequest = data => ({type: ADD_SECTION_REQUEST, data});

export const deleteSectionById = id => ({
  type: 'DELETE_SECTION_BY_ID_REQUEST',
  data: id,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_SECTION_REJECTED: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case INIT_SECTION_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    }

    case INIT_SECTION_REJECTED: {
      return {
        ...state,
        isLoading: false,
        data: [],
      };
    }

    case DELETE_SECTION_BY_ID_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case DELETE_SECTION_BY_ID_FULFILLED: {
      let filtered = state.data.filter(v => v.id !== action.data);

      return {
        ...state,
        data: filtered,
      };
    }

    case DELETE_SECTION_BY_ID_REJECTED: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ADD_SECTION_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ADD_SECTION_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.data],
      };
    }

    case ADD_SECTION_REJECTED: {
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
