import {Platform, StatusBar} from 'react-native';
import {height_, height_screen} from './dimensions';
import DeviceInfo from 'react-native-device-info';

const getSize = size => size;

export const isArrayCheck = arr => {
  return Array.isArray(arr) && arr.length > 0;
};

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const ANDROID_VERSION = DeviceInfo.getSystemVersion();
const variables = {
  getSize,
  colorPrimary: '#00112C',
  colorPrimaryDim: '#00112C50',

  colorTab: '',
  colorSelectedTab: '',
  colorSuccess: '#18B141',
  colorError: '#FF6060',
  colorBlack: '#000000',
  colorWhite: '#ffffff',
  colorWhiteDim: '#f0f0f090',
  fontColorMain: '',
  fontColorGray: '#D3D3D3',
  fontColorMediumGray: '#716F81',
  placeHolderColor: '#A9A9A9',

  fontWeightBold: '600',
  fontWeightThin: '200',
  fontWeightRegular: '400',
  colorHeading: '#2D2D53',
  colorSubtext: '#8B8B8B',

  fontSizeH1Large: getSize(50),
  fontSizeH1Medium: getSize(32),
  fontSizeH1Small: getSize(27),
  fontSizeH2Large: getSize(24),
  fontSizeH2Medium: getSize(21),
  fontSizeH2Small: getSize(18),
  fontSizePMedium: getSize(16),
  fontSizePSmall: getSize(14),
  fontSizeSubtext: getSize(12),
  fontSizeSmall: getSize(10),
  fontSizeTine: getSize(8),

  fontRubikMedium: 'rubik_medium',
  fontRubikRegular: 'rubik_regular',
  fontSfSemibold: 'sf_pro_semibold',

  UIPaddingHorizontal: '6%',
  UIPaddingVertical: '6%',
  authPagePaddingTop: '30%',
  tineScale: height_screen * 0.005,
  firstScale: height_screen * 0.01,
  secondScale: height_screen * 0.015,
  thirdScale: height_screen * 0.02,
  fourScale: height_screen * 0.025,
  fiveScale: height_screen * 0.03,
  sixScale: height_screen * 0.04,
  iosTopPadding: height_screen * 0.05,
  iosTopPadding_firstScale: height_screen * 0.03,

  borderRadiusSmall: getSize(5),
  borderRadiusMedium: getSize(10),
  borderRadiusLarge: getSize(30),
  borderRadiusXLarge: getSize(70),

  shadowStyle: intensity => ({
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: intensity / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: intensity * 0.7,
    elevation: intensity,
  }),

  circleStyle: size => ({
    width: size,
    height: size,
    borderRadius: size,
    alignItems: 'center',
    justifyContent: 'center',
  }),

  circleSizeSmall: getSize(50),
  circleSizeMedium: getSize(60),
};

export default variables;
