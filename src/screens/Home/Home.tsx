/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from 'react-native';
import {Image} from 'react-native';

const Home = () => {
  const datas = [
    {
      imgSrc: require('../../assets/story/your_story.png'),
      name: 'Your Story',
    },
    {
      imgSrc: require('../../assets/story/story_1.png'),
      name: 'sooyaaa__',
    },
    {
      imgSrc: require('../../assets/story/story_2.png'),
      name: 'jennierubyjane',
    },
    {
      imgSrc: require('../../assets/story/story_3.png'),
      name: 'roses_are_rosie',
    },
    {
      imgSrc: require('../../assets/story/story_4.png'),
      name: 'lalalalisa_m',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={{display: 'flex'}}>
        <FlatList
          style={{
            backgroundColor: '#fff',
            paddingVertical: 10,
            borderTopWidth: 0.5,
            borderTopColor: '#ccc',
            borderBottomColor: '#ccc',
            borderBottomWidth: 0.5,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={datas}
          renderItem={({item}) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}>
              <Image
                source={item.imgSrc}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginBottom: 5,
                }}
              />
              <Text
                style={{
                  color: '#000',
                }}>
                {item.name.slice(0, 10)}
              </Text>
            </View>
          )}
        />
      </View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
