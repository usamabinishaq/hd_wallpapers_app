import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import RenderFlatList from '../../../../components/views/RenderFlatList';
import {Wallpapers} from '../../../../data/data';
import {height_screen, width_screen} from '../../../../util/dimensions';
import variables, {isArrayCheck} from '../../../../util/utils';
import style from './style';
const PopularTab = ({navigation}) => {
  const {all_wallpapers, categories} = useSelector(data => data._wallpapers);
  const [selectedWallpapers, setSelectedWallpapers] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    let temp = _filterWallpapers('Latest');
    setSelectedWallpapers(temp);
  }, [isFocused]);

  const _filterWallpapers = notInclude => {
    return all_wallpapers.filter(i => i.option !== notInclude);
  };
  return (
    <View style={style.main}>
      {isArrayCheck(selectedWallpapers) ? (
        <RenderFlatList
          title={'Popular'}
          data={selectedWallpapers}
          columns={3}
          onItemPress={() => {}}
        />
      ) : (
        <ActivityIndicator size={'large'} color={variables.colorPrimary} />
      )}
    </View>
  );
};
export default PopularTab;
