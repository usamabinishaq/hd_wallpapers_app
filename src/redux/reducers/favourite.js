import {
  GET_FAVOURITE_WALLPAPERS,
  SET_FAVOURITE_WALLPAPERS,
} from '../actions/types';
const initial_state = {
  favourite_wallpapers: null,
};

export default function (state = initial_state, action) {
  switch (action.type) {
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
