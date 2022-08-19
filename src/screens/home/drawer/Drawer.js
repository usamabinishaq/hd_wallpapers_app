import React, {useState} from 'react';
import {Image, Linking, Pressable, Share, StyleSheet, View} from 'react-native';
import Heading from '../../../components/text/Heading';
import {
  about_us_icon,
  APP_LINK,
  APP_NAME,
  fav_icon,
  logo,
  privacy_icon,
  rate_icon,
  share_icon,
} from '../../../constants/constants';
import {height_screen, width_screen} from '../../../util/dimensions';
import variables from '../../../util/utils';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import TopDrawerContainer from '../../../components/views/TopDrawerContainer';

let DrawerItems = [
  {id: 1, icon: fav_icon, title: 'Favourite'},
  {id: 2, icon: about_us_icon, title: 'About Us'},
  {id: 3, icon: share_icon, title: 'Share App'},
  {id: 4, icon: privacy_icon, title: 'Privacy Policy'},
  {id: 5, icon: rate_icon, title: 'Rate Us'},
];

const CustomDrawer = props => {
  const [isClicked, setIsClicked] = useState(false);

  const _handleSelectedDrawerItem = item => {
    switch (item.id) {
      case 1:
        props.navigation.navigate('Favourites');
        break;
      case 2:
        props.navigation.navigate('AboutUs');
        break;
      case 3:
        props.navigation.closeDrawer();
        if (!isClicked) {
          setIsClicked(true);
          setTimeout(() => {
            Share.share({
              title: APP_NAME,
              message: `Let me recommend you ${APP_NAME} app for Awesome Wallpapers. Download from the Link Below.\nLink: ${APP_LINK}`,
            }).then(e => {
              setTimeout(() => {
                setIsClicked(false);
              }, 1000);
            });
          }, 500);
        }
        break;
      case 4:
        props.navigation.navigate('PrivacyPolicy');
        break;
      case 5:
        props.navigation.closeDrawer();
        setTimeout(() => {
          Linking.openURL(APP_LINK);
        }, 500);

        break;

      default:
        console.log('Invalid');
        break;
    }
  };

  return (
    <View style={styles.main}>
      <DrawerContentScrollView
        style={styles.drawerContainer}
        showsVerticalScrollIndicator={false}>
        <TopDrawerContainer />

        <View style={styles.drawerItemsContainer}>
          {DrawerItems.map((item, index) => {
            return (
              <MenuItem
                key={index}
                icon={item.icon}
                title={item.title}
                onPress={() => {
                  _handleSelectedDrawerItem(item);
                }}
              />
            );
          })}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawer;

const MenuItem = ({icon, title, onPress}) => {
  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      <Image source={icon} style={styles.menuItemIcon} />
      <Heading
        size={variables.fontSizePSmall}
        color={variables.colorPrimary}
        fontFamily={variables.fontRubikRegular}
        style={{textAlign: 'justify', flex: 0.7}}>
        {title}
      </Heading>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: variables.colorWhite,
  },
  drawerItemsContainer: {
    marginTop: '5%',
  },
  hiddenContainer: {width: width_screen * 0.4, backgroundColor: '#00000060'},

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingVertical: '5%',
  },
  menuItemIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    flex: 0.3,
  },
});
