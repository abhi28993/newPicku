import * as React from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const ProfileTAbStack = createStackNavigator();

import Notification from '../Screens/NoficationScreen/Notification';
import EditProfile from '../Screens/EditProfileScreen/EditProfile';
import Profile from '../Screens/ProfileScreen/Profile';
import OtherProfile from '../Screens/OtherProfileScreen/OtherProfile';
import {
  EDIT_PROFILE_SCREEN,
  NOTIFICATION_SCREEN,
  OTHER_PROFILE_SCREEN,
  PROFILE_SCREEN,
} from '../Assets/Constant/StringConstant';

const ProfileStack = () => {
  return (
    <ProfileTAbStack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={PROFILE_SCREEN}
        component={Profile}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={EDIT_PROFILE_SCREEN}
        component={EditProfile}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={OTHER_PROFILE_SCREEN}
        component={OtherProfile}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={NOTIFICATION_SCREEN}
        component={Notification}
        options={{animationEnabled: false}}
      />
    </ProfileTAbStack.Navigator>
  );
};

export default ProfileStack;
