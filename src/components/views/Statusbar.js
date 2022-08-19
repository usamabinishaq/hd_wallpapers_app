import React from 'react';
import {StatusBar} from 'react-native';
import variables from '../../util/utils';

const Statusbar = ({backgroundColor = variables.colorPrimary}) => {
  return (
    <StatusBar
      translucent
      backgroundColor={backgroundColor}
      barStyle={'light-content'}
    />
  );
};
export default Statusbar;
