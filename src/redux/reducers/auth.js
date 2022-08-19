import {AUTH_LOADING, LOGIN_FAILED, LOGIN_SUCCESS} from '../actions/types';

const initial_state = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
