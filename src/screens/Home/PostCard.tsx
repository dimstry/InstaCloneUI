/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import logoSave from '../../assets/logo/Save';
import logoComment from '../../components/images/commentImg';
import logoLiked from '../../components/images/likedImg';
import logoLove from '../../components/images/loveImg';
import logoMessenger from '../../components/images/massageImg';
// import {useState} from 'react';

type PostCardProps = {
  imgSrc: any;
  profileImgSrc: any;
  name: string;
  official: boolean;
  location: string;
  caption: string;
  like: string;
};

const PostCard = ({
  imgSrc,
  profileImgSrc,
  name,
  official,
  location,
  caption,
  like,
}: PostCardProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      {/* header */}
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          source={profileImgSrc}
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
            <Text style={{fontWeight: '600', fontSize: 16, color: '#000'}}>
              {name}
            </Text>
            {official && (
              <Image
                source={require('../../assets/logo/Official.png')}
                style={{width: 16, height: 16, marginLeft: 5}}
              />
            )}
          </View>
          <Text style={{color: '#262626', fontSize: 12}}>{location}</Text>
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
        source={imgSrc}
        style={{
          width: '100%',
          height: 400,
          resizeMode: 'cover',
        }}
      />
      {/* header */}
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
            gap: 15,
            width: '100%',
            paddingVertical: 6,
          }}>
          <TouchableOpacity
            onPress={() => {
              console.log('like');
            }}>
            {logoLove(27, 23)}
          </TouchableOpacity>
          {logoComment(23, 24)}
          {logoMessenger()}
          <TouchableOpacity
            style={{
              marginLeft: 'auto',
              marginRight: 10,
            }}
            onPress={() => {}}>
            {logoSave(22, 24)}
          </TouchableOpacity>
        </View>
      </View>
      {/* like info */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        {logoLiked(20, 20)}
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: '#262626',
            marginLeft: 5,
          }}>
          Liked by {''}
        </Text>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            color: '#262626',
          }}>
          sooyaaa__
        </Text>
        <Text style={{fontSize: 14, color: '#262626', marginLeft: 5}}>
          and{' '}
        </Text>
        <Text style={{fontWeight: '700', fontSize: 14, color: '#262626'}}>
          {like} others
        </Text>
      </View>
      {/* caption */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 14,
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            color: '#262626',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: '#262626',
            marginLeft: 5,
          }}>
          {caption}
        </Text>
      </View>
    </View>
  );
};

export default PostCard;
