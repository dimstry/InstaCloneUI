/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoCamera() {
  return (
    <Image
      source={require('../../assets/logo/Camera.png')}
      style={{width: 24, height: 22}}
    />
  );
}
export default logoCamera;
