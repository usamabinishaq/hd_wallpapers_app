import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {height_screen, width_screen} from '../../util/dimensions';
import variables from '../../util/utils';
import RoundedTabItem from './RoundedTabItem';
const CategorySelector = ({categories, selected}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]._id);
  const isFocused = useIsFocused();
  const ref = useRef();

  // const scrollToIndex = () => {
  //   ref.current.scrollToIndex({animation: true, index: 0});
  // };
  // useEffect(() => {
  //   setSelectedCategory(categories[0]._id);
  //   scrollToIndex();
  // }, [isFocused]);
  return (
    <View style={styles.main}>
      <FlatList
        ref={ref}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item, index}) => {
          return (
            <RoundedTabItem
              key={index}
              selected={selectedCategory}
              category={item}
              onPress={() => {
                setSelectedCategory(item._id);
                selected(item);
              }}
            />
          );
        }}
      />
    </View>
  );
};
export default CategorySelector;
const styles = StyleSheet.create({
  main: {
    flex: 0.1,

    width: width_screen,
    borderBottomWidth: 1,
    borderColor: variables.fontColorGray,
    shadowColor: variables.colorBlack,
    marginBottom: '0.5%',
    backgroundColor: variables.colorWhite,
  },
});
