import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {PROFILE_SCREENS} from '../Assets/Constant/StringConstant';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import ProfileScreen from '../Screens/ProfileScreen/Profile';
let CheckToken = () => {
  AsyncStorage.getItem('token').then(resp => {
    return resp;
  });
};

const OrderStack = () => {
  useEffect(() => {
    CheckToken();
    if (!CheckToken) {
      AsyncStorage.removeItem('token');
      props.navigation.replace(LOGIN_SCREEN);
    }
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#3e04c3'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name={PROFILE_SCREENS}
        component={ProfileScreen}
        options={{animationEnabled: false, headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
