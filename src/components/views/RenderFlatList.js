import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {height_screen, width_screen} from '../../util/dimensions';
import variables, {isArrayCheck} from '../../util/utils';
import WallpaperItem from './WallpaperItem';
const RenderFlatList = ({data, columns, title}) => {
  const {navigate} = useNavigation();
  const isFocused = useIsFocused();
  const ref = useRef();

  const scrollToIndex = () => {
    ref.current.scrollToIndex({animation: true, index: 0});
  };
  useEffect(() => {
    scrollToIndex();
  }, [isFocused]);

  const _handleOnPressItem = (item, index) => {
    console.log('INDEX===> ', index);
    navigate('SingleWallpaperList', {
      index: index,
      wallpaperId: item._id,
      selectedCategoryList: data,
      title: title,
    });
  };

  return (
    console.log('DATA LENGTH===>', data.length),
    (
      <FlatList
        ref={ref}
        style={{marginTop: '2.5%'}}
        showsVerticalScrollIndicator={false}
        numColumns={columns}
        data={data}
        renderItem={({item, index}) => {
          return (
            <WallpaperItem
              item={item}
              index={index}
              onPress={() => {
                _handleOnPressItem(item, index);
              }}
            />
          );
        }}
      />
    )
  );
};
export default RenderFlatList;
