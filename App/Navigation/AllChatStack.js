import * as React from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const MessageTAbStack = createStackNavigator();

import Notification from '../Screens/NoficationScreen/Notification';
import AllChat from '../Screens/AllChatScreen/AllChat';
import SingleChat from '../Screens/SingleChatScreen/SingleChat';

import {
  ALL_CHAT_SCREEN,
  NOTIFICATION_SCREEN,
  SINGLE_CHAT_SCREEN,
} from '../Assets/Constant/StringConstant';

const AllChatScreen = () => {
  return (
    <MessageTAbStack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ALL_CHAT_SCREEN}
        component={AllChat}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={SINGLE_CHAT_SCREEN}
        component={SingleChat}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={NOTIFICATION_SCREEN}
        component={Notification}
        options={{animationEnabled: false}}
      />
    </MessageTAbStack.Navigator>
  );
};

export default AllChatScreen;
