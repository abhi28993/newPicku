import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {ADD_Bill_SCREENS } from '../Assets/Constant/StringConstant';
import {GlobalStyles} from '../Assets/Colors/Color';
import AddBillsScreen from '../Screens/BillingScreen/AddBillsScreen';

const CustomerBillStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.primary500,
        tabBarActiveBackgroundColor: GlobalStyles.colors.primary200,
      }}>
      <Stack.Screen
        name={ADD_Bill_SCREENS}
        component={AddBillsScreen}
        options={{animationEnabled: false}}
      />
      
    </Stack.Navigator>
  );
};

export default CustomerBillStack;
