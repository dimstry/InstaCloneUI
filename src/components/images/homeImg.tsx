/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoHome() {
  return (
    <Image
      source={require('../../assets/logo/Home.png')}
      style={{width: 24, height: 25}}
    />
  );
}
export default logoHome;
