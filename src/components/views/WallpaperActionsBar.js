import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, Share, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {APP_NAME, share_icon} from '../../constants/constants';
import {
  downloadEnd,
  downloadStart,
  updateDownloadCount,
} from '../../redux/actions/downloads';
import {updateFavouriteWallpaper} from '../../redux/actions/wallpaper';
import {downloadPicture} from '../../util/DownloadImage';
import variables from '../../util/utils';
import DownloadButton from '../buttons/DownloadButton';

function WallpaperActionsBar({
  iconColor,
  selectedColor,
  favourite,
  onDownloadPress,
  onFavouritePress,
  wallpaper,
}) {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const _onShareWallpaper = url => {
    console;
    if (!isClicked) {
      setIsClicked(true);
      Share.share({
        title: APP_NAME,
        message: `Download Wallpaper from the Link Below provided by ${APP_NAME}\nLink: ${url}`,
      }).then(e => {
        setTimeout(() => {
          setIsClicked(false);
        }, 2000);
      });
    }
  };
  const _onDownloadImage = async () => {
    dispatch(downloadStart(wallpaper._id));
    let downloadSuccessful = await downloadPicture(wallpaper.image);
    console.log('MESSAGE::', downloadSuccessful);
    if (downloadSuccessful) {
      dispatch(updateDownloadCount(wallpaper));
    }

    dispatch(downloadEnd());
  };

  return (
    <View style={styles.main}>
      <Icon
        name={favourite ? 'heart' : 'heart-o'}
        color={favourite ? selectedColor : iconColor}
        size={20}
        onPress={onFavouritePress}
      />
      <DownloadButton
        onPress={() => {
          _onDownloadImage();
        }}
        id={wallpaper._id}
      />
      <Pressable
        onPress={() => {
          _onShareWallpaper(wallpaper.image);
        }}>
        <Image
          source={share_icon}
          style={[styles.icon, {tintColor: iconColor}]}
        />
      </Pressable>
    </View>
  );
}

export default WallpaperActionsBar;
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    width: 20,
    height: 20,

    resizeMode: 'contain',
  },
});
