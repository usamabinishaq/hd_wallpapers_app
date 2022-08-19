import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import RenderFlatList from '../../../../components/views/RenderFlatList';
import {Wallpapers} from '../../../../data/data';
import variables, {isArrayCheck} from '../../../../util/utils';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';
import {useIsFocused} from '@react-navigation/native';
const NewTab = () => {
  const {all_wallpapers} = useSelector(data => data._wallpapers);
  const [selectedWallpapers, setSelectedWallpapers] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    let temp = _filterWallpapers('Latest');
    setSelectedWallpapers(temp);
  }, [isFocused]);

  const _filterWallpapers = include => {
    return all_wallpapers.filter(i => i.option === include);
  };
  return (
    <View style={style.main}>
      {isArrayCheck(selectedWallpapers) ? (
        <RenderFlatList
          title={'New'}
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
export default NewTab;
