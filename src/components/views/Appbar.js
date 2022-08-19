import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {height_} from '../../util/dimensions';
import variables from '../../util/utils';
import Heading from '../text/Heading';
import Statusbar from './Statusbar';
const Appbar = ({
  leftIcon,
  title,
  rightIcon,
  onLeftIconPress,
  rightIconPress,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={variables.colorPrimary} />
      <Pressable onPress={onLeftIconPress}>
        {leftIcon ? (
          <Image source={leftIcon} style={styles.icon} />
        ) : (
          <Icon name="arrow-back" size={25} color={variables.colorWhite} />
        )}
      </Pressable>
      <Heading
        size={variables.fontSizePMedium}
        fontFamily={variables.fontRubikRegular}
        style={styles.title}>
        {title}
      </Heading>
      {rightIcon ? (
        <Pressable onPress={rightIconPress}>
          <Image source={rightIcon} style={styles.icon} />
        </Pressable>
      ) : null}
    </SafeAreaView>
  );
};
export default Appbar;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    flex: 0.1,
    paddingHorizontal: '5%',
    backgroundColor: variables.colorPrimary,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    paddingLeft: '5%',
    textAlign: 'left',
  },
});
