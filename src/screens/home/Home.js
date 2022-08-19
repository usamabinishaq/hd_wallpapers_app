import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import Appbar from '../../components/views/Appbar';
import {menu_icon, search_icon} from '../../constants/constants';
import {HomeTabs} from '../../navigation';

import style from './style';
const Home = ({navigation, route}) => {
  return (
    <View style={style.main}>
      <Appbar
        leftIcon={menu_icon}
        rightIcon={search_icon}
        title={'Home'}
        onLeftIconPress={() => {
          navigation.openDrawer();
        }}
        rightIconPress={() => {
          navigation.navigate('Search');
        }}
      />
      <HomeTabs />
    </View>
  );
};
export default Home;
