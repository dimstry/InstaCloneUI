/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Linking} from 'react-native';

const Profile = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <View
        style={{
          display: 'flex',
          paddingHorizontal: 20,
        }}>
        {/* header */}
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../../assets/story/your_story.png')}
              style={{
                width: 95,
                height: 95,
                borderRadius: 40,
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                54
              </Text>
              <Text style={{fontSize: 16, color: '#000'}}>Posts</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                3.900
              </Text>
              <Text style={{fontSize: 16, color: '#000'}}>Followers</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                1,234
              </Text>
              <Text style={{fontSize: 16, color: '#000'}}>Following</Text>
            </View>
          </View>
        </View>
        {/* name and link */}
        <View
          style={{
            marginTop: 20,
          }}>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
            Dimas Triana
          </Text>
          <Text style={{fontSize: 15, color: '#000'}}>
            Frontend Developer | Mobile Developer
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="link"
              size={12}
              style={{marginRight: 4}}
              color="#05386B"
              onPress={() => Linking.openURL('https://dimstry.me')}
            />
            <Text
              style={{fontSize: 14, color: '#05386B'}}
              onPress={() => Linking.openURL('https://dimstry.me')}>
              dimstry.me
            </Text>
          </View>
        </View>
        {/* edit profile */}
        <View
          style={{
            display: 'flex',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              width: '100%',
              height: 40,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
            }}>
            <Text style={{fontSize: 17, color: '#000'}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        {/* my highlight story */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            marginTop: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#ccc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
              }}>
              <Image
                source={require('../../assets/logo/AddStory.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <Text style={{fontSize: 15, color: '#262626', fontWeight: '400'}}>
              New
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#ccc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
              }}>
              <Image
                source={require('../../assets/story/Coding.png')}
                style={{
                  width: '95%',
                  height: '95%',
                }}
              />
            </View>
            <Text style={{fontSize: 15, color: '#262626', fontWeight: '400'}}>
              Coding Time
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#ccc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
              }}>
              <Image
                source={require('../../assets/story/Design.png')}
                style={{
                  width: '95%',
                  height: '95%',
                }}
              />
            </View>
            <Text style={{fontSize: 15, color: '#262626', fontWeight: '400'}}>
              Design
            </Text>
          </View>
        </View>
      </View>
      {/* header post */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderTopColor: '#ccc',
          borderTopWidth: 1,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '50%',
            height: 55,
            borderBottomColor: '#000',
            borderBottomWidth: 2,
          }}>
          <Image
            source={require('../../assets/logo/GridIcon.png')}
            style={{
              width: 23,
              height: 23,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '50%',
            height: 55,
          }}>
          <Image
            source={require('../../assets/logo/TagsIcon.png')}
            style={{
              width: 23,
              height: 23,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* post */}
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '33%',
              height: 124,
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../../assets/post/my_post/Post_1.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
          <View
            style={{
              width: '33%',
              height: 124,
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../../assets/post/my_post/Post_2.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
          <View
            style={{
              width: '33%',
              height: 124,
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../../assets/post/my_post/Post_3.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
