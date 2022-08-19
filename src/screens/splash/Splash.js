import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Heading, {headingSize} from '../../components/text/Heading';
import PaddingView from '../../components/views/PaddingView';
import Statusbar from '../../components/views/Statusbar';
import {
  APP_NAME,
  logo,
  logo2,
  splash_bg_image,
} from '../../constants/constants';
import {
  fetchAllCategories,
  fetchAllWallpapers,
} from '../../redux/actions/wallpaper';
import variables from '../../util/utils';
import style from './style';

const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllWallpapers());
    dispatch(fetchAllCategories());
  }, []);
  return (
    <View style={style.main}>
      <Statusbar />
      <View style={style.topView}>
        <Image source={logo} style={[style.logo]} />
        <Heading
          size={variables.fontSizeH2Large}
          color={variables.colorWhite}
          fontFamily={variables.fontRubikRegular}
          style={{paddingVertical: '2.5%'}}>
          {APP_NAME}
        </Heading>
      </View>
      <View style={style.bottomView}>
        <Image source={splash_bg_image} style={style.bg_image} />
      </View>
    </View>
  );
};
export default Splash;
