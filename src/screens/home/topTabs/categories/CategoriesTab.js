import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  Image,
  ToastAndroid,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CategorySelector from '../../../../components/views/CategorySelector';
import RenderFlatList from '../../../../components/views/RenderFlatList';
import variables, {isArrayCheck} from '../../../../util/utils';

import style from './style';

const CategoriesTab = ({route}) => {
  const {all_wallpapers, categories} = useSelector(data => data._wallpapers);
  const [selectedWallpapers, setSelectedWallpapers] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].title);
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('WALLPAPERR===>', selectedCategory);
    setSelectedCategory(categories[0].title);
    let temp = _filterWallpapers(categories[0]._id);
    setSelectedWallpapers(temp);
  }, []);

  useEffect(() => {
    if (isFocused) {
      const backAction = () => {
        Alert.alert('Exit App', 'Are you sure you want to exit app?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  }, [isFocused]);

  const _filterWallpapers = id => {
    return all_wallpapers.filter(i => i.category === id);
  };

  return (
    <View style={style.main}>
      <CategorySelector
        categories={categories}
        selected={e => {
          console.log('SELECTED==>', e);
          setSelectedCategory(e.title);
          setSelectedWallpapers(_filterWallpapers(e._id));
        }}
      />
      <View style={style.flatListContainer}>
        {isArrayCheck(selectedWallpapers) ? (
          <RenderFlatList
            title={selectedCategory}
            data={selectedWallpapers}
            columns={3}
            onItemPress={() => {}}
          />
        ) : (
          <ActivityIndicator size={'large'} color={variables.colorPrimary} />
        )}
      </View>
    </View>
  );
};
export default CategoriesTab;
