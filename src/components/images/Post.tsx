/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoPost() {
  return (
    <Image
      source={require('../../assets/logo/Post.png')}
      style={{width: 24, height: 25}}
    />
  );
}
export default logoPost;
