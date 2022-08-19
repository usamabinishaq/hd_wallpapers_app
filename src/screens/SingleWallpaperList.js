import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Wallpapers} from '../data/data';
import {height_screen, width_screen} from '../util/dimensions';
import variables from '../util/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import Heading from '../components/text/Heading';
import {
  back_icon,
  dot_icon,
  fav_icon,
  ITEM_SIZE,
  share_icon,
} from '../constants/constants';
import DownloadButton from '../components/buttons/DownloadButton';
import WallpaperCard from '../components/views/WallpaperCard';
import Appbar from '../components/views/Appbar';

const SingleWallpaperList = ({route, navigation}) => {
  let Wallpaper_id = route.params.wallpaperId;
  let CategoryList = route.params.selectedCategoryList;
  let CategoryName = route.params.title;
  const [index, setIndex] = useState(route.params.index);
  const ref = useRef(null);
  let totalLength = CategoryList.length;
  useEffect(() => {
    // _scrollToIndex(index);
  }, []);
  const _scrollToIndex = index => {
    ref.current.scrollToIndex({
      animated: true,
      index: index + 1,
      viewPosition: 0.5,
    });
  };
  // const getItemLayout = (data, index) => ({
  //   length: 1,
  //   offset: 1,
  //   index,
  // });

  return (
    console.log('SELECTED INDEX==>', index),
    (
      <View style={styles.main}>
        <Appbar
          rightIcon={dot_icon}
          title={CategoryName}
          onLeftIconPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{flex: 0.9}}>
          <FlatList
            ref={ref}
            initialScrollIndex={
              index === 0 ? index : index === totalLength - 1 ? index : index
            }
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CategoryList}
            // getItemLayout={getItemLayout}
            pagingEnabled
            bounces={false}
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.75}
            snapToInterval={width_screen * 0.9}
            snapToAlignment="center"
            keyExtractor={(photo, index) => index}
            renderItem={({item, index}) => {
              return <WallpaperCard wallpaper={item} isFavourite={false} />;
            }}
          />
        </View>
      </View>
    )
  );
};
export default SingleWallpaperList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: variables.colorWhite,
    width: width_screen,
    height: height_screen,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
