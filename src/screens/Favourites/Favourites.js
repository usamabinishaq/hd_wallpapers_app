import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Heading from '../../components/text/Heading';
import Appbar from '../../components/views/Appbar';

import RenderFlatList from '../../components/views/RenderFlatList';
import variables, {isArrayCheck} from '../../util/utils';
import style from './style';

const Favourites = ({navigation}) => {
  const {all_wallpapers} = useSelector(data => data._wallpapers);
  const {user} = useSelector(data => data._auth);
  const [selectedWallpapers, setSelectedWallpapers] = useState(null);

  useEffect(() => {
    let temp = _filterWallpapers();
    console.log(temp);
    setSelectedWallpapers(temp);
  }, [all_wallpapers]);

  const _filterWallpapers = () => {
    let Temp = [];
    all_wallpapers.map(wallpaper => {
      wallpaper.favBy.find(i => i === user) !== undefined
        ? Temp.push(wallpaper)
        : null;
    });
    return Temp;
  };
  return (
    <View style={{flex: 1}}>
      <Appbar
        onLeftIconPress={() => {
          navigation.goBack({back: true});
        }}
        title={'Favourites'}
      />
      <View style={style.main}>
        {isArrayCheck(selectedWallpapers) ? (
          <RenderFlatList
            title={'Favourites'}
            data={selectedWallpapers}
            columns={3}
            onItemPress={() => {}}
          />
        ) : (
          <Heading
            size={variables.fontSizePSmall}
            color={variables.colorPrimary}
            fontFamily={variables.fontRubikMedium}
            style={{alignSelf: 'center'}}>
            {'No Wallapaper Found!'}
          </Heading>
        )}
      </View>
    </View>
  );
};
export default Favourites;
