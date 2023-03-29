/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoProfile() {
  return (
    <Image
      source={require('../../assets/logo/Profile.png')}
      style={{width: 30, height: 30}}
    />
  );
}
export default logoProfile;
