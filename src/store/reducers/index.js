import {
  LOADING,
  LOGIN_SUCCESS,
  GET_SUCCESS,
  ERROR,
  NEW_USER_SUCCESS,
  NEW_USER_ERROR,
  GET_TICKETS_ALL
} from '../actions';

const initialState = {
  tickets: [],
  loading: false,
  error: null,
  isAuth: false,
  isNew: false
};

export default function devDeskReducer(state = initialState, actions) {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        isAuth: false,
        isNew: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAuth: true,
        isNew: false
      };
    case GET_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: actions.payload,
        isNew: false
      };
    case NEW_USER_ERROR:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: actions.payload,
        isNew: false
      };
    case NEW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isNew: true,
        error: null
      };
    case GET_TICKETS_ALL:
      return {
        ...state,
        loading: false,
        error: null,
        tickets: actions.payload,
        isAuth: true
      };
    default:
      return state;
  }
}
