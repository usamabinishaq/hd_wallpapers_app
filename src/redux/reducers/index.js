import {combineReducers} from 'redux';
import auth from './auth';
import downloads from './downloads';

import wallpapers from './wallpaper';
export default combineReducers({
  _auth: auth,
  _wallpapers: wallpapers,
  _downloads: downloads,
});
