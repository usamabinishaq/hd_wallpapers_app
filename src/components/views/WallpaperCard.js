import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Image, Pressable, Share, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {APP_NAME, ITEM_SIZE, share_icon} from '../../constants/constants';
import {
  downloadEnd,
  downloadStart,
  updateDownloadCount,
} from '../../redux/actions/downloads';
import {height_screen, width_screen} from '../../util/dimensions';
import {DownloadImage, downloadPicture} from '../../util/DownloadImage';
import variables from '../../util/utils';
import DownloadButton from '../buttons/DownloadButton';
import {useDispatch, useSelector} from 'react-redux';
import {updateFavouriteWallpaper} from '../../redux/actions/wallpaper';
import WallpaperActionsBar from './WallpaperActionsBar';

const WallpaperCard = ({wallpaper}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const {user} = useSelector(data => data._auth);
  const [isFav, setFav] = useState(false);

  useEffect(() => {
    _checkFavourites();
  }, []);
  const _checkFavourites = () => {
    let temp = wallpaper.favBy.filter(i => i === user);
    temp.length === 1 ? setFav(true) : setFav(false);
  };
  const _updateFavourites = () => {
    setFav(!isFav);
    dispatch(updateFavouriteWallpaper(wallpaper, user, !isFav));
  };

  return (
    <View style={styles.flatListContainer}>
      <Pressable
        style={{flex: 0.9}}
        onPress={() => {
          navigate('PreviewWallpaper', {wallpaper: wallpaper});
        }}>
        <Image source={{uri: wallpaper.image}} style={styles.flatListImage} />
      </Pressable>
      <View style={styles.flatListBottomView}>
        <WallpaperActionsBar
          wallpaper={wallpaper}
          selectedColor={variables.colorPrimary}
          iconColor={variables.colorSubtext}
          favourite={isFav}
          onFavouritePress={() => {
            _updateFavourites();
          }}
        />
      </View>
    </View>
  );
};
export default WallpaperCard;
const styles = StyleSheet.create({
  flatListContainer: {
    height: height_screen * 0.75,
    width: ITEM_SIZE,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2.5,
    margin: 10,
  },
  flatListImage: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  flatListBottomView: {
    flex: 0.1,
    backgroundColor: variables.colorWhite,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: variables.colorSubtext,
    resizeMode: 'contain',
  },
});
