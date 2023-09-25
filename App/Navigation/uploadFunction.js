import * as React from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const UploadPostStack = createStackNavigator();

import Notification from '../Screens/NoficationScreen/Notification';
import Post from '../Screens/Chat/Chat';
import AddTextPost from '../Screens/AddPostScreen/AddPost';
import AddLinkPost from '../Screens/AddLinkScreen/AddLink';
import AddImagePost from '../Screens/AddImageScreen/AddImage';
import AddVideoPost from '../Screens/AddVideoScreen/AddVideo';
import PostTo from '../Screens/PostToScreen/PostTo';
import {
  IMAGE_POST_SCREEN,
  LINK_POST_SCREEN,
  NOTIFICATION_SCREEN,
  POST_SCREEN,
  POST_TO_SCREEN,
  TEXT_POST_SCREEN,
  VIDEO_POST_SCREEN,
} from '../Assets/Constant/StringConstant';

const uploadFunction = () => {
  return (
    <UploadPostStack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={POST_SCREEN}
        component={Post}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={TEXT_POST_SCREEN}
        component={AddTextPost}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={LINK_POST_SCREEN}
        component={AddLinkPost}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={IMAGE_POST_SCREEN}
        component={AddImagePost}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={VIDEO_POST_SCREEN}
        component={AddVideoPost}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={POST_TO_SCREEN}
        component={PostTo}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={NOTIFICATION_SCREEN}
        component={Notification}
        options={{animationEnabled: false}}
      />
    </UploadPostStack.Navigator>
  );
};

export default uploadFunction;
