/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoMessenger() {
  return (
    <Image
      source={require('../assets/logo/Messanger.png')}
      style={{width: 23, height: 20}}
    />
  );
}
export default logoMessenger;
