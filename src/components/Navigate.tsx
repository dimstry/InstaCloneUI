import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import NavBottom from './NavBottom';
// import Search from '../screens/Search/Search';
// import MovieDetail from '../screens/MovieDetail/MovieDetail';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={NavBottom}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{
            headerTitleAlign: 'center',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;
