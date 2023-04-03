/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

import logoInstagram from '../components/images/instaImg';
import logoIgtv from '../components/images/igtvImg';
import logoMessenger from '../components/images/massageImg';
import logoCamera from '../components/images/camImg';
import logoHome from './images/homeImg';
import logoSearch from './images/searchImg';
import logoPost from './images/Post';
import logoLove from './images/loveImg';
import logoProfile from './images/profilImg';
import logoList from './images/listImg';

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
          backgroundColor: '#fff',
          height: 80,
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
        component={Profile}
        options={{
          headerShadowVisible: false,
          headerTitle: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <Icon name="lock" size={17} color="#000" />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '800',
                  color: '#000',
                }}>
                dimstr__
              </Text>
              {logoList(11, 7)}
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{paddingRight: 15}}
              onPress={() => {
                navigation.navigate('setting');
              }}>
              <Image
                source={require('../assets/logo/Menu.png')}
                style={{
                  width: 21,
                  height: 18,
                }}
              />
            </TouchableOpacity>
          ),
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
