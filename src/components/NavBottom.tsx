/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home/Home';
// import TopRated from '../screens/TopRated/TopRated';
// import UpComing from '../screens/UpComing/UpComing';
// import Popular from '../screens/Popular/Popular';

import logoInstagram from '../components/images/instaImg';
import logoIgtv from '../components/images/igtvImg';
import logoMessenger from '../components/images/massageImg';

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
          headerTitle: () => logoInstagram(),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Icons name="camera-alt" size={28} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Search');
                }}>
                {logoIgtv()}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Search');
                }}>
                {/* massager icon */}
                {logoMessenger()}
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({color, size}) => (
            <Icons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Top Rated"
        component={TopRated}
        options={{
          tabBarLabel: 'Top Rated',
          tabBarIcon: ({color, size}) => (
            <Icons name="timeline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: ({color, size}) => (
            <Icons name="favorite" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Up Coming"
        component={UpComing}
        options={{
          tabBarLabel: 'Up Coming',
          tabBarIcon: ({color, size}) => (
            <Icons name="keyboard-arrow-up" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default NavBottom;
