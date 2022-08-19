import React, {useRef, useState} from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {width_screen} from '../../util/dimensions';
import variables from '../../util/utils';

function CustomSearchTextInput({
  value,
  onChangeText,
  placeholder,
  placeholderColor = variables.colorSubtext,
  style,
  leftIcon,
  onSearch,
  keyboardType,
  returnType,
  ...props
}) {
  return (
    <View style={[styles.main, {...style}]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          value={value}
          keyboardType={keyboardType ? keyboardType : 'default'}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderColor}
          placeholder={placeholder}
          {...props}
        />
        <TouchableOpacity
          onPress={onSearch}
          style={{
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: variables.colorPrimary,
            height: '100%',
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={leftIcon} color={variables.colorWhite} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    borderRadius: 10,
    paddingHorizontal: variables.secondScale,
    backgroundColor: '#f1f1f1',
    borderColor: variables.colorPrimary,

    height: 45,
    width: width_screen * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '2.5%',
  },
  input: {
    color: variables.colorPrimary,
    width: '88%',
    fontFamily: variables.fontRubikRegular,
    minHeight: Platform.OS == 'ios' ? 40 : 30,
  },
});
export default CustomSearchTextInput;
