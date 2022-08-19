import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {AUTH_LOADING, LOGIN_SUCCESS} from './types';

export const anonymousAuth = () => async dispatch => {
  dispatch({type: AUTH_LOADING, payload: true});
  auth()
    .signInAnonymously()
    .then(res => {
      console.log('User signed in anonymously====>', res.user.uid);
      dispatch({type: LOGIN_SUCCESS, payload: res.user.uid});
      dispatch({type: AUTH_LOADING, payload: false});
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
      Alert.alert(
        'Alert',
        'Something Went Wrong Please Check your Network Connection',
      );
      console.error(error);
    });
};
export const downloadStart = id => dispatch => {
  dispatch({type: DOWNLOADING_START, payload: id});
};
export const downloadEnd = () => dispatch => {
  dispatch({type: DOWNLOADING_END});
};
