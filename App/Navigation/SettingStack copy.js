import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const SettingStack =  createNativeStackNavigator();

import Notification from '../Screens/NoficationScreen/Notification';
import Setting from '../Screens/AddCategoryScreen/AddCategory';
import NotificationSetting from '../Screens/NotificationSettingScreen/NotificationSetting';
import {
  NOTIFICATION_SCREEN,
  NOTIFICATION_SETTING_SCREEN,
  SETTING_SCREEN,
} from '../Assets/Constant/StringConstant';

const SettingStackFunction = () => {
  return (
    <SettingStack.Navigator screenOptions={{headerShown: true}} >
      <Stack.Screen
        name={SETTING_SCREEN}
        component={Setting}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={NOTIFICATION_SETTING_SCREEN}
        component={NotificationSetting}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={NOTIFICATION_SCREEN}
        component={Notification}
        options={{animationEnabled: false}}
      />
    </SettingStack.Navigator>
  );
};

export default SettingStackFunction;
