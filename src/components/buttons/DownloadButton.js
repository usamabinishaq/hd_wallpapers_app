import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {download_icon} from '../../constants/constants';
import {killMe} from '../../util/DownloadImage';
import variables from '../../util/utils';
import Heading from '../text/Heading';
import {useSelector} from 'react-redux';

const DownloadButton = ({onPress, id}) => {
  const {downloading, downloading_id} = useSelector(data => data._downloads);

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      {downloading && downloading_id === id ? (
        <ActivityIndicator
          size={'small'}
          color={variables.colorWhite}
          style={{}}
        />
      ) : (
        <Image source={download_icon} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};

export default DownloadButton;
const styles = StyleSheet.create({
  main: {
    alignSelf: 'center',
    width: 65,
    minHeight: 25,
    backgroundColor: variables.colorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    paddingVertical: 12,
  },
});
