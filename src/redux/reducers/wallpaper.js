import {
  LOADING_START,
  LOADING_END,
  GET_WALLPAPERS,
  GET_CATEGORIES,
  GET_FAVOURITE_WALLPAPERS,
  SET_FAVOURITE_WALLPAPERS,
} from '../actions/types';
const initial_state = {
  loading: true,
  all_wallpapers: [],
  categories: [],
  favourite_wallpapers: [],
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case GET_WALLPAPERS:
      return {
        ...state,
        all_wallpapers: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_FAVOURITE_WALLPAPERS:
      return {
        ...state,
        favourite_wallpapers: action.payload,
      };
    case SET_FAVOURITE_WALLPAPERS:
      return {
        ...state,
        favourite_wallpapers: action.payload,
      };

    default:
      return state;
  }
}
