/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoPost() {
  return (
    <Image
      source={require('../../assets/logo/Post.png')}
      style={{width: 26, height: 26}}
    />
  );
}
export default logoPost;
