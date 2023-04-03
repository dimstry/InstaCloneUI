/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import PostCard from './PostCard';
import Stories from '../../components/Stories';

const Home = () => {
  // const ImgSrc

  const data = [
    {
      id: 1,
      name: 'itzy.all.in.us',
      imgSrc: require('../../assets/post/post_1.jpeg'),
      profileImgSrc: require('../../assets/profile/profile_1.png'),
      like: '1.100.000',
      comment: '12.3K',
      official: true,
      location: 'Tokyo, Japan',
      caption: 'JYP Nation',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Stories />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <PostCard
            imgSrc={item.imgSrc}
            profileImgSrc={item.profileImgSrc}
            name={item.name}
            official={item.official}
            location={item.location}
            caption={item.caption}
            like={item.like}
          />
        )}
      />
    </View>
  );
};

export default Home;
