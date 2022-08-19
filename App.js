import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import AppNavigator from './src/navigation';
import {anonymousAuth} from './src/redux/actions/auth';
import store from './src/redux/store';
import {isArrayCheck} from './src/util/utils';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  const [isSpalsh, setSplash] = useState(true);
  const dispatch = useDispatch();
  const {all_wallpapers, categories} = useSelector(data => data._wallpapers);
  const {user} = useSelector(data => data._auth);

  useEffect(() => {
    dispatch(anonymousAuth());
    user && isArrayCheck(all_wallpapers) && isArrayCheck(categories)
      ? setSplash(false)
      : null;
  }, [all_wallpapers, categories, user]);
  return (
    <NavigationContainer>
      <AppNavigator splash={isSpalsh} />
    </NavigationContainer>
  );
};

export default App;
