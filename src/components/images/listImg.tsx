import React from 'react';
import {Image} from 'react-native';

function logoList(width?: number, height?: number) {
  return (
    <Image
      source={require('../../assets/logo/ListDown.png')}
      style={{width: width, height: height}}
    />
  );
}
export default logoList;
