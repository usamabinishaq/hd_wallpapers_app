import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from '../screens/splash/Splash';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoriesTab from '../screens/home/topTabs/categories/CategoriesTab';
import PopularTab from '../screens/home/topTabs/popular/PopularTab';
import NewTab from '../screens/home/topTabs/new/NewTab';
import variables from '../util/utils';
import Home from '../screens/home/Home';
import SingleWallpaperList from '../screens/SingleWallpaperList';
import PreviewWallpaper from '../screens/PreviewWallpaper';
import Favourites from '../screens/Favourites/Favourites';
import AboutUs from '../screens/AboutUs/AboutUs';
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy';
import CustomDrawer from '../screens/home/drawer/Drawer';
import Search from '../screens/Search/Search';

const DrawerNavigator = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const SplashNavigator = createStackNavigator();
const MainNavigator = createStackNavigator();

function SplashStackNavigator() {
  return (
    <SplashNavigator.Navigator>
      <SplashNavigator.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
    </SplashNavigator.Navigator>
  );
}

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: variables.colorWhite,
        },
        tabBarLabelStyle: {
          color: variables.colorWhite,
          fontFamily: variables.fontRubikMedium,
          fontSize: variables.getSize(12.5),
        },
        tabBarScrollEnabled: false,
        swipeEnabled: false,

        tabBarStyle: {
          backgroundColor: variables.colorPrimary,
          elevation: 0,
          shadowOffset: null,
        },
      }}>
      <Tab.Screen name="Categories" component={CategoriesTab} />
      <Tab.Screen name="Popular" component={PopularTab} />
      <Tab.Screen name="New" component={NewTab} />
    </Tab.Navigator>
  );
}

function MainDrawerNavigator() {
  return (
    <DrawerNavigator.Navigator
      initialRouteName="RootStack"
      drawerContent={props => <CustomDrawer {...props} />}>
      <DrawerNavigator.Screen
        name="RootStack"
        component={MainStackNavigator}
        options={{headerShown: false, title: 'Home'}}
      />
    </DrawerNavigator.Navigator>
  );
}
function MainStackNavigator() {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <MainNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="SingleWallpaperList"
        component={SingleWallpaperList}
      />
      <MainNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="PreviewWallpaper"
        component={PreviewWallpaper}
      />
      <MainNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="Favourites"
        component={Favourites}
      />
      <MainNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="Search"
        component={Search}
      />
      <MainNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="AboutUs"
        component={AboutUs}
      />
      <MainNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
    </MainNavigator.Navigator>
  );
}

function AppNavigator({splash}) {
  return splash ? <SplashStackNavigator /> : <MainDrawerNavigator />;
}

export default AppNavigator;
