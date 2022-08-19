import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {height_screen, width_screen} from '../../util/dimensions';
import variables from '../../util/utils';
import Heading from '../text/Heading';
import FastImage from 'react-native-fast-image';
import {image_sekeleton} from '../../constants/constants';

function WallpaperItem({onPress, item}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <View
          style={[
            style.flatListItem,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Icon
            name="image-outline"
            size={50}
            color={variables.fontColorGray}
          />
          <Heading
            size={12}
            color={variables.fontColorGray}>{`Loading...`}</Heading>
        </View>
      ) : null}

      <TouchableOpacity onPress={onPress} style={{}}>
        <Image
          source={{uri: item.image, cache: 'default'}}
          style={style.flatListItem}
          onLoad={() => {
            setLoading(false);
          }}
        />
      </TouchableOpacity>
    </>
  );
}

export default WallpaperItem;
const style = StyleSheet.create({
  flatListItem: {
    width: width_screen / 3 - 12,
    height: height_screen / 3.7,
    resizeMode: 'cover',
    marginHorizontal: 3,
    marginVertical: variables.getSize(3),
    borderRadius: 10,
  },
});
