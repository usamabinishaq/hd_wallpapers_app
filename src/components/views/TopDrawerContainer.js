import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {APP_NAME, logo, logo2} from '../../constants/constants';
import {height_screen} from '../../util/dimensions';
import variables from '../../util/utils';
import Heading from '../text/Heading';
const TopDrawerContainer = () => {
  return (
    <View style={styles.topDrawerContainer}>
      <Image
        source={logo2}
        style={[styles.logoStyle, variables.shadowStyle(5)]}
      />

      <Heading
        size={variables.fontSizePMedium}
        fontFamily={variables.fontRubikMedium}
        color={variables.colorPrimary}
        style={{paddingLeft: '2.5%'}}>
        {APP_NAME}
      </Heading>
    </View>
  );
};
export default TopDrawerContainer;

const styles = StyleSheet.create({
  topDrawerContainer: {
    height: height_screen * 0.2,
    flexDirection: 'row',
    width: '100%',
    marginLeft: '9%',
    marginBottom: '5%',
    alignItems: 'center',
  },
  logoStyle: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
    borderRadius: 15,
  },
});
