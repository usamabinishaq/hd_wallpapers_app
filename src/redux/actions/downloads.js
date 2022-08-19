import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {DOWNLOADING_END, DOWNLOADING_START, GET_WALLPAPERS} from './types';
import {fetchAllWallpapers} from './wallpaper';

export const updateDownloadCount = data => async dispatch => {
  let temp = data;
  temp.downloadCount += 1;
  data = temp;

  firestore()
    .collection('wallpaper')
    .doc(data._id)
    .update(data)
    .then(res => {
      console.log('RESPONSE Updated====>');
      dispatch(fetchAllWallpapers());
    })
    .catch(err => {
      console.log('Error in Updating Downloading', err);
    });
};
export const downloadStart = id => dispatch => {
  dispatch({type: DOWNLOADING_START, payload: id});
};
export const downloadEnd = () => dispatch => {
  dispatch({type: DOWNLOADING_END});
};
