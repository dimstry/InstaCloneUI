/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoInstagram() {
  return (
    <Image
      source={require('../../assets/logo/Instagram.png')}
      style={{width: 105, height: 28}}
    />
  );
}
export default logoInstagram;
