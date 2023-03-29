/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from 'react-native';
import {Image} from 'react-native';

import Stories from '../../components/Stories';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  const data = [
    {
      id: '1',
      name: 'itzy.all.in.us',
      imgSrc: require('../../assets/post/post_1.jpeg'),
      profileImgSrc: require('../../assets/profile/profile_1.png'),
      like: '1.2M',
      comment: '12.3K',
      official: true,
      location: 'Hatimu 💖',
    },
    {
      id: '2',
      name: 'John Doe',
      imgSrc: require('../../assets/post/post_1.jpeg'),
      profileImgSrc: require('../../assets/profile/profile_1.png'),
      like: '1.2M',
      comment: '12.3K',
    },
    {
      id: '3',
      name: 'John Doe',
      imgSrc: require('../../assets/post/post_1.jpeg'),
      profileImgSrc: require('../../assets/profile/profile_1.png'),
      like: '1.2M',
      comment: '12.3K',
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            {/* header */}
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image
                source={item.profileImgSrc}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  margin: 10,
                }}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontWeight: '600', fontSize: 16, color: '#000'}}>
                    {item.name}
                  </Text>
                  {item.official && (
                    <Image
                      source={require('../../assets/logo/Official.png')}
                      style={{width: 16, height: 16, marginLeft: 5}}
                    />
                  )}
                </View>
                <Text style={{color: '#262626', fontSize: 12}}>
                  {item.location}
                </Text>
              </View>
              <Icon
                name="ellipsis-h"
                size={16}
                style={{
                  alignSelf: 'center',
                  marginLeft: 'auto',
                  color: '#262626',
                  marginRight: 10,
                }}
              />
            </View>
            {/* image */}
            <Image
              source={item.imgSrc}
              style={{
                width: '100%',
                height: 400,
                resizeMode: 'cover',
              }}
            />
            {/* footer */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="heart"
                  size={20}
                  style={{color: '#262626', marginRight: 10}}
                />
                <Icon
                  name="comment"
                  size={20}
                  style={{color: '#262626', marginRight: 10}}
                />
                <Icon
                  name="paper-plane"
                  size={20}
                  style={{color: '#262626', marginRight: 10}}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
