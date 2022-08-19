import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import variables, {width_screen} from '../../util/utils';
import Heading, {headingSize} from '../text/Heading';

function CustomButton({
  loading = false,
  onPress,
  children,
  shadow,
  lightText,
  style,
  disabled = false,
  ...props
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        styles.buttonContainer,
        {
          ...(shadow ? variables.shadowStyle(4) : {}),
          ...style,
        },
      ]}
      {...props}
      onPress={onPress}>
      {/* // disabled={disabled ? disabled : api_loading} */}
      {loading ? (
        <ActivityIndicator size={'small'} color={variables.colorWhite} />
      ) : typeof children == 'string' ? (
        <Heading
          size={variables.fontSizePSmall}
          color={variables.colorWhite}
          style={{fontFamily: variables.fontRubikRegular, letterSpacing: 0.5}}>
          {children}
        </Heading>
      ) : (
        children
      )}
      {/* {api_loading ? (
        <ActivityIndicator
          style={{paddingLeft: variables.firstScale}}
          color={variables.colorWhite}
        />
      ) : null} */}
    </TouchableOpacity>
  );
}

export default CustomButton;
const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: variables.colorPrimary,
    padding: '2%',
    minWidth: variables.getSize(160),
    maxWidth: variables.getSize(175),
    paddingHorizontal: '3%',
    borderRadius: variables.getSize(8),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
