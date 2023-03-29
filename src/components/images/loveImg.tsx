/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoLove() {
  return (
    <Image
      source={require('../../assets/logo/Love.png')}
      style={{width: 29, height: 24}}
    />
  );
}
export default logoLove;
