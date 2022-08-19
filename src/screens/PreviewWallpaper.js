import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  NativeModules,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';
import {height_screen, width_screen} from '../util/dimensions';
import variables, {ANDROID_VERSION, STATUSBAR_HEIGHT} from '../util/utils';
import {updateFavouriteWallpaper} from '../redux/actions/wallpaper';
import WallpaperActionsBar from '../components/views/WallpaperActionsBar';
import CustomButton from '../components/buttons/CustomButton';
import WallpaperManager, {TYPE} from 'react-native-wallpaper-manage';

const PreviewWallpaper = ({route, navigation}) => {
  const preview = route.params.wallpaper;
  const dispatch = useDispatch();
  const {user} = useSelector(data => data._auth);
  const [isFav, setFav] = useState(false);
  const [isSetWallpaper, setIsWallpaper] = useState(false);

  useEffect(() => {
    console.log(
      'HEIGHT==>',
      STATUSBAR_HEIGHT,
      ' ANdroid Version',
      ANDROID_VERSION,
      '   ',
    );
    _checkFavourites();
  }, []);
  const _checkFavourites = () => {
    let temp = preview.favBy.filter(i => i === user);
    temp.length === 1 ? setFav(true) : setFav(false);
  };
  const _updateFavourites = () => {
    setFav(!isFav);
    dispatch(updateFavouriteWallpaper(preview, user, !isFav));
  };
  const _callback = res => {
    console.log('Response: ', res);
  };

  const _setWallpaper = () => {
    setIsWallpaper(true);
    setTimeout(() => {
      WallpaperManager.setWallpaper(preview.image, TYPE.FLAG_SYSTEM)
        .then(result => {
          ToastAndroid.show(
            'Wallpaper sets up successful ',
            ToastAndroid.SHORT,
          );
          setIsWallpaper(false);
        })
        .catch(e => {
          setIsWallpaper(false);
          ToastAndroid.show(
            'Error While Updating Wallpaper!',
            ToastAndroid.SHORT,
          );
        });
    }, 100);
  };

  return (
    <SafeAreaView
      style={{
        width: width_screen,
        height: height_screen,
      }}>
      <StatusBar backgroundColor={variables.colorPrimary} />
      <ImageBackground
        source={{uri: preview.image}}
        style={{
          width: width_screen,
          height: height_screen,
          justifyContent: 'space-between',
        }}>
        <View style={styles.topbarView}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#00000065',
            }}>
            <Ionicon
              name={'arrow-back'}
              size={25}
              color={variables.colorWhite}
            />
          </Pressable>

          <CustomButton loading={isSetWallpaper} onPress={_setWallpaper}>
            {'Set as wallpaper'}
          </CustomButton>
        </View>

        <View style={styles.bottomView}>
          <WallpaperActionsBar
            wallpaper={preview}
            selectedColor={variables.colorWhite}
            iconColor={variables.colorWhite}
            favourite={isFav}
            onFavouritePress={() => {
              _updateFavourites();
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default PreviewWallpaper;

const styles = StyleSheet.create({
  topbarView: {
    height: height_screen * 0.1,
    flexDirection: 'row',
    width: width_screen,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: variables.colorWhite,
  },
  bottomView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: width_screen,
    backgroundColor: '#00000065',
    height: 65,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom:
      ANDROID_VERSION === '8.1.0' && STATUSBAR_HEIGHT <= 28
        ? STATUSBAR_HEIGHT
        : null,
  },
});
