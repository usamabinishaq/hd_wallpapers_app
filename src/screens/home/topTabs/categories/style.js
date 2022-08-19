import {StyleSheet} from 'react-native';
import {height_screen, width_screen} from '../../../../util/dimensions';
import variables from '../../../../util/utils';

const style = StyleSheet.create({
  main: {flex: 1, width: width_screen, backgroundColor: variables.colorWhite},
  flatListContainer: {
    flex: 0.9,
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
    backgroundColor: variables.colorWhite,
  },
});
export default style;
