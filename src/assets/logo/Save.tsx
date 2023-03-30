import React from 'react';
import {Image} from 'react-native';

function logoSave(width?: number, height?: number) {
  return (
    <Image
      source={require('../../assets/logo/Save.png')}
      style={{width: width, height: height}}
    />
  );
}
export default logoSave;
