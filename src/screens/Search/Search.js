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
import CustomSearchTextInput from '../../components/textInput/CustomTextInput';
import Appbar from '../../components/views/Appbar';

import RenderFlatList from '../../components/views/RenderFlatList';
import variables, {isArrayCheck} from '../../util/utils';
import style from './style';

const Search = ({navigation}) => {
  const {all_wallpapers, categories} = useSelector(data => data._wallpapers);
  const {user} = useSelector(data => data._auth);
  const [selectedWallpapers, setSelectedWallpapers] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    console.log(categories[0]);
    setSelectedWallpapers(all_wallpapers);
  }, []);

  const _filterWallpapers = () => {
    let Temp = [];
    let Category = categories.filter(i =>
      i.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    Category.map(item => {
      let t = all_wallpapers.filter(i => i.category === item._id);
      t.map(item => {
        Temp.push(item);
      });
    });
    setSelectedWallpapers(Temp);
  };
  return (
    <View style={style.main}>
      <Appbar
        title={'Search'}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          flex: 0.9,
          paddingVertical: '2.5%',
          paddingHorizontal: '2.5%',
        }}>
        <CustomSearchTextInput
          leftIcon={'search'}
          placeholder={'Serach'}
          onSearch={() => {
            _filterWallpapers();
          }}
          onChangeText={e => {
            setSearchText(e);
          }}
        />
        {searching ? (
          <ActivityIndicator size={'small'} color={variables.colorPrimary} />
        ) : null}

        {isArrayCheck(selectedWallpapers) ? (
          <RenderFlatList
            title={'Search'}
            data={selectedWallpapers}
            columns={3}
            onItemPress={() => {}}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Heading
              size={variables.fontSizePSmall}
              color={variables.colorPrimary}
              fontFamily={variables.fontRubikMedium}
              style={{alignSelf: 'center'}}>
              {'Wallpaper Not Found!'}
            </Heading>
          </View>
        )}
      </View>
    </View>
  );
};
export default Search;
