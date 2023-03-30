import React from 'react';
import {Image} from 'react-native';

function logoLiked(width?: number, height?: number) {
  return (
    <Image
      source={require('../../assets/logo/sooya.png')}
      style={{width: width, height: height}}
    />
  );
}
export default logoLiked;
