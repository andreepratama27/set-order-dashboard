const initialState = {
  data: [],
  isLoading: false,
};

export const INIT_SCHEDULE_REQUEST = 'INIT_SCHEDULE_REQUEST';
export const INIT_SCHEDULE_FULFILLED = 'INIT_SCHEDULE_FULFILLED';
export const INIT_SCHEDULE_REJECTED = 'INIT_SCHEDULE_REJECTED';

export const ADD_SCHEDULE_REQUEST = 'ADD_SCHEDULE_REQUEST';
export const ADD_SCHEDULE_FULFILLED = 'ADD_SCHEDULE_FULFILLED';
export const ADD_SCHEDULE_REJECTED = 'ADD_SCHEDULE_REJECTED';

export const DELETE_SCHEDULE_BY_ID_REQUEST = 'DELETE_SCHEDULE_BY_ID_REQUEST';
export const DELETE_SCHEDULE_BY_ID_FULFILLED =
  'DELETE_SCHEDULE_BY_ID_FULFILLED';
export const DELETE_SCHEDULE_BY_ID_REJECTED = 'DELETE_SCHEDULE_BY_ID_REJECTED';

export const scheduleRequest = () => ({
  type: INIT_SCHEDULE_REQUEST,
});

export const addScheduleRequest = data => ({type: ADD_SCHEDULE_REQUEST, data});

export const deleteScheduleById = id => ({
  type: 'DELETE_SCHEDULE_BY_ID_REQUEST',
  data: id,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_SCHEDULE_REJECTED: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case INIT_SCHEDULE_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    }

    case INIT_SCHEDULE_REJECTED: {
      return {
        ...state,
        isLoading: false,
        data: [],
      };
    }

    case DELETE_SCHEDULE_BY_ID_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case DELETE_SCHEDULE_BY_ID_FULFILLED: {
      let filtered = state.data.filter(v => v.id !== action.data);

      return {
        ...state,
        data: filtered,
      };
    }

    case DELETE_SCHEDULE_BY_ID_REJECTED: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ADD_SCHEDULE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ADD_SCHEDULE_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.data],
      };
    }

    case ADD_SCHEDULE_REJECTED: {
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
