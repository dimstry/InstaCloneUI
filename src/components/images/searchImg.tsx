/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoSearch() {
  return (
    <Image
      source={require('../../assets/logo/Search.png')}
      style={{width: 24, height: 25}}
    />
  );
}
export default logoSearch;
