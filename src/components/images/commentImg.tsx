import React from 'react';
import {Image} from 'react-native';

function logoComment(width?: number, height?: number) {
  return (
    <Image
      source={require('../../assets/logo/Comment.png')}
      style={{width: width, height: height}}
    />
  );
}
export default logoComment;
