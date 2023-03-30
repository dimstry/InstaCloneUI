import React from 'react';
import {Image} from 'react-native';

function logoLove(width?: number, height?: number) {
  return (
    <Image
      source={require('../../assets/logo/Love.png')}
      style={{width: width, height: height}}
    />
  );
}
export default logoLove;
