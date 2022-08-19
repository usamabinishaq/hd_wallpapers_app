import RNFetchBlob from 'rn-fetch-blob';
import {useDispatch, useSelector} from 'react-redux';
import {DOWNLOADING_END, DOWNLOADING_START} from '../redux/actions/types';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {downloadEnd, downloadStart} from '../redux/actions/downloads';

export const getExtention = filename => {
  // To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

// export const downloadPicture = url => {
//   let dirs = RNFetchBlob.fs.dirs.PictureDir;
//   let ext = getExtention(url);
//   console.log('DIRECTORY::+++==>', ext);
// };

export const askForPermission = async () => {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
  }
};
export const _checkExistingImage = async path => {
  let response;
  await RNFetchBlob.fs
    .exists(path)
    .then(res => {
      console.log('IS EXISTS==>', res);
      response = res;
    })
    .catch(err => {
      console.log('ERROR While Checking ', err);
    });
  return response;
};
export const downloadPicture = async imageFile => {
  // Main function to download the image
  // Image URL which we want to download

  await askForPermission();
  let downloaded;
  let image_URL = imageFile;
  let image_name = imageFile.split('/').pop();
  image_name.includes('?') ? (image_name = image_name.split('?')[0]) : null;
  let download_path =
    RNFetchBlob.fs.dirs.PictureDir +
    '/HD Wallpaper/hd_wallpapers_' +
    image_name;
  console.log('DOWNLOAD PATH IS====>', download_path);
  let exists = await _checkExistingImage(download_path);
  if (!exists) {
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: download_path,
        description: 'Image',
      },
    };
    await RNFetchBlob.config(options)
      .fetch('GET', image_URL)
      .then(async res => {
        // Showing alert after successful downloading
        console.log('res ====> ', JSON.stringify(res));
        Alert.alert('Download information', 'Image Download Successful');
        downloaded = true;
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Download information', err);
        downloaded = false;
      });
    return downloaded;
  } else {
    Alert.alert('Alert', 'Image Already Downloded!');
    return downloaded;
  }
};
