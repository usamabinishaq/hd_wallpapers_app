import firestore from '@react-native-firebase/firestore';
import {
  GET_CATEGORIES,
  GET_WALLPAPERS,
  LOADING_END,
  LOADING_START,
} from './types';

export const fetchAllWallpapers = () => dispatch => {
  dispatch({type: LOADING_START});
  firestore()
    .collection('wallpaper')
    // .limit(10)
    .get()
    .then(res => {
      let tempWallpapers = [];

      res.docs.forEach(item => {
        const itemData = item.data();
        tempWallpapers.push({...itemData, _id: item.ref.id});
      });
      if (tempWallpapers) {
        dispatch({
          type: GET_WALLPAPERS,
          payload: tempWallpapers,
        });
        dispatch({type: LOADING_END});
      }
    })
    .catch(err => {
      console.log('Error in fetching Wallpapers', err);
    });
};
export const fetchAllCategories = () => dispatch => {
  firestore()
    .collection('categories')
    .get()
    .then(res => {
      let tempCategories = [];
      res.docs.forEach(item => {
        const itemData = item.data();

        tempCategories.push({...itemData, _id: item.ref.id});
      });
      if (tempCategories) {
        dispatch({
          type: GET_CATEGORIES,
          payload: tempCategories,
        });
      }
    })
    .catch(err => {
      console.log('Error in fetching Categories', err);
    });
};

export const updateFavouriteWallpaper =
  (data, uid, isFavourite) => async dispatch => {
    console.log(isFavourite);
    let temp = data;
    let tempFavBy;
    if (isFavourite) {
      temp.favBy.push(uid);
    } else {
      tempFavBy = temp.favBy.filter(i => i !== uid);
      temp.favBy = tempFavBy;
    }
    data = temp;

    firestore()
      .collection('wallpaper')
      .doc(data._id)
      .update(data)
      .then(res => {
        console.log('Favoutites Added');
        dispatch(fetchAllWallpapers());
      })
      .catch(err => {
        console.log('Error in Updating Downloading', err);
      });
  };
