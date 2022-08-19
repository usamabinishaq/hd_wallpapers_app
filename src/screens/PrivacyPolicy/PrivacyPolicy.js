import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import ProgressBarWebView from 'react-native-progress-webview';

import Appbar from '../../components/views/Appbar';

const PrivacyPolicy = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Appbar
        onLeftIconPress={() => {
          navigation.goBack({back: true});
        }}
        title={'Privacy Policy'}
      />
      <ProgressBarWebView
        source={{uri: 'https://centumsols.com/privacy-policy'}}
      />
    </View>
  );
};
export default PrivacyPolicy;
