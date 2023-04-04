/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

function logoSearch() {
  return (
    <Image
      source={require('../../assets/logo/Search.png')}
      style={{width: 25, height: 25}}
    />
  );
}
export default logoSearch;
