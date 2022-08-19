import {Platform} from 'react-native';
import {width_screen} from '../util/dimensions';

export const APP_NAME = 'HD Wallpapers';
export const APP_LINK = 'https://play.google.com/store/apps';
export const PRIVACYPOLICY_LINK = 'https://centumsols.com/privacy-policy';
export const PrivacyPolicyDescription =
  'As Centum Solutions Our focus is user’s need, we create simple, smooth solutions that add value in your life. We target real world problems based on user experience with better design and technology. We are making the apps with smooth user interface and easy to use.';

export const logo = require('../assets/images/logo.png');
export const logo2 = require('../assets/images/logo2.jpg');

export const splash_bg_image = require('../assets/images/splash_bg.png');
// export const image1 = require('../assets/images/1.jpg');
// export const image2 = require('../assets/images/2.png');
// export const image3 = require('../assets/images/3.png');
// export const image4 = require('../assets/images/4.png');
// export const image5 = require('../assets/images/5.png');
// export const image6 = require('../assets/images/6.png');
// export const image7 = require('../assets/images/7.jpg');
// export const image8 = require('../assets/images/8.jpg');
// export const image9 = require('../assets/images/9.png');
// export const image10 = require('../assets/images/10.jpg');

export const menu_icon = require('../assets/icons/menu_icon.png');
export const search_icon = require('../assets/icons/search_icon.png');
export const fav_icon = require('../assets/icons/fav_icon.png');
export const share_icon = require('../assets/icons/share_icon.png');
export const download_icon = require('../assets/icons/download_icon.png');
export const back_icon = require('../assets/icons/back_icon.png');
export const dot_icon = require('../assets/icons/dot_icon.png');
export const about_us_icon = require('../assets/icons/help_icon.png');
export const privacy_icon = require('../assets/icons/privacy_policy.png');
export const rate_icon = require('../assets/icons/rate_us_icon.png');
export const image_sekeleton = require('../assets/icons/image_sekeleton.png');

export const ITEM_SIZE =
  Platform.OS === 'ios' ? width_screen * 0.82 : width_screen * 0.84;
