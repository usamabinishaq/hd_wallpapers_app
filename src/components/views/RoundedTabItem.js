import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import variables from '../../util/utils';
import Heading from '../text/Heading';

const RoundedTabItem = ({category, onPress, selected}) => {
  let isSelected = selected === category._id ? true : false;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.main,
        {
          borderColor: isSelected
            ? variables.colorPrimary
            : variables.fontColorGray,
          backgroundColor: isSelected ? variables.colorPrimary : null,
        },
      ]}>
      <Heading
        size={variables.fontSizePSmall}
        fontFamily={variables.fontRubikRegular}
        color={variables.fontColorGray}
        style={styles.name}>
        {category.title}
      </Heading>
    </TouchableOpacity>
  );
};
export default RoundedTabItem;
const styles = StyleSheet.create({
  main: {
    marginHorizontal: 7.5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
  },
  name: {paddingHorizontal: 20, paddingVertical: variables.getSize(8)},
});
