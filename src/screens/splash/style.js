import {StyleSheet} from 'react-native';
import {height_screen, width_screen} from '../../util/dimensions';
import variables from '../../util/utils';
const style = StyleSheet.create({
  main: {flex: 1, width: '100%', backgroundColor: variables.colorPrimary},
  topView: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'baseline',
    alignSelf: 'baseline',
  },
  logo: {
    width: width_screen / 3,
    height: width_screen / 3,
    resizeMode: 'contain',
  },
  bg_image: {
    width: width_screen,
    height: height_screen,
    resizeMode: 'contain',
  },
});
export default style;
