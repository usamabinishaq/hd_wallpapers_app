import {DOWNLOADING_START, DOWNLOADING_END} from '../actions/types';
const initial_state = {
  downloading: false,
  downloading_id: '',
  downloads_count: 0,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case DOWNLOADING_START:
      return {
        ...state,
        downloading: true,
        downloading_id: action.payload,
      };
    case DOWNLOADING_END:
      return {
        ...state,
        downloading: false,
        downloading_id: '',
      };

    default:
      return state;
  }
}
