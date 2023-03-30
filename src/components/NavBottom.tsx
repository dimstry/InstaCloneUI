/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity} from 'react-native';

import Home from '../screens/Home/Home';

import logoInstagram from '../components/images/instaImg';
import logoIgtv from '../components/images/igtvImg';
import logoMessenger from '../components/images/massageImg';
import logoCamera from '../components/images/camImg';
import logoHome from './images/homeImg';
import logoSearch from './images/searchImg';
import logoPost from './images/Post';
import logoLove from './images/loveImg';
import logoProfile from './images/profilImg';

// import TopRated from '../screens/TopRated/TopRated';
// import UpComing from '../screens/UpComing/UpComing';
// import Popular from '../screens/Popular/Popular';

const Tab = createBottomTabNavigator();

const NavBottom = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarStyle: {
          paddingBottom: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerShadowVisible: false,
          headerTitle: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {logoInstagram()}
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: 15}}
              onPress={() => {
                navigation.navigate('camera');
              }}>
              {logoCamera()}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('igtv');
                }}>
                {logoIgtv()}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('messenger');
                }}>
                {/* massager icon */}
                {logoMessenger()}
              </TouchableOpacity>
            </View>
          ),
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 80,
          },
          tabBarIcon: () => <View>{logoHome()}</View>,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <TouchableOpacity>{logoSearch()}</TouchableOpacity>,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <TouchableOpacity>{logoPost()}</TouchableOpacity>,
        }}
      />
      <Tab.Screen
        name="Love"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <TouchableOpacity>{logoLove(29, 26)}</TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <TouchableOpacity>{logoProfile()}</TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBottom;
