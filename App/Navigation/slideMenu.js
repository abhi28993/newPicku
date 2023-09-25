import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
// Constants
import styles from './tabstyles';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoIcon from 'react-native-vector-icons/Ionicons';
import {
  ALL_CHAT_STACK,
  home,
  HOME_STACK,
  logout,
  message,
  profile,
  PROFILE_STACK,
  rules,
  saved,
  settings,
  SETTING_STACK,
  tayconRules,
  TAYCONRULES_SCREEN,
} from '../Assets/Constant/StringConstant';
const SlideMenu = ({state, descriptors, navigation}) => {
  // let index = state.index;
  // var currentRoute = state.routes[index].name;
  console.log('State:----------->', state);
  return (
    <DrawerContentScrollView style={styles.drawerBack}>
      <View style={styles.crossMain}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <IoIcon name="close" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.picMarginTop}>
        <Image
          style={styles.profilePic}
          source={require('../Assets/Images/lap.jpg')}
        />
        <Text style={styles.profileText}>Lara Danel</Text>
        <View style={styles.menuMain}>
          <View>
            <TouchableOpacity
              style={styles.itemView}
              onPress={() => {
                navigation.navigate(HOME_STACK);
              }}>
              <Icon name="home-outline" size={25} color={'#ccc'} />
              <Text style={[styles.menuText]}>{home}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.itemView}
              onPress={() => {
                navigation.navigate(PROFILE_STACK);
              }}>
              <Icon name="account-outline" size={25} color={'#ccc'} />
              <Text style={styles.menuText}>{profile}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.itemView}
              onPress={() => {
                navigation.navigate(TAYCONRULES_SCREEN);
              }}>
              <Icon
                name="account-supervisor-outline"
                size={25}
                color={'#ccc'}
              />
              <Text style={styles.menuText}>{rules}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.itemView}
              onPress={() => {
                navigation.navigate(ALL_CHAT_STACK);
              }}>
              <Icon name="message-text-outline" size={25} color={'#ccc'} />
              <Text style={styles.menuText}>{message}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(TAYCONRULES_SCREEN);
              }}
              style={styles.itemView}>
              <Icon name="nail" size={25} color={'#ccc'} />
              <Text style={styles.menuText}>{tayconRules}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itemView} onPress={() => {}}>
              <IoIcon name="ios-bookmark-outline" size={25} color={'#ccc'} />
              <Text style={styles.menuText}>{saved}</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{height: '5%'}} /> */}
        </View>
      </View>
      <View style={styles.bottomMenu}>
        <View>
          <TouchableOpacity
            style={styles.itemView}
            onPress={() => {
              navigation.navigate(SETTING_STACK);
            }}>
            <IoIcon name="md-settings-outline" size={25} color={'#ccc'} />
            <Text style={styles.menuText}>{settings}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.itemView} onPress={() => {}}>
            <Icon name="logout" size={25} color={'#ccc'} />
            <Text style={styles.menuText}>{logout}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default SlideMenu;
