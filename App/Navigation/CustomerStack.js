import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AddCategory from '../Screens/AddProductScreen/AddCategoryScreen/AddCategory';
import {ADD_CUSTOMER_SCREENS } from '../Assets/Constant/StringConstant';
import {GlobalStyles} from '../Assets/Colors/Color';
import AddCustomerScreen from '../Screens/BillingScreen/AddCustomerScreen';
import CustomerDetailsScreen from '../Screens/BillingScreen/CustomerDetailsScreen';

const CustomerStack = () => {
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
        name={ADD_CUSTOMER_SCREENS}
        component={AddCustomerScreen}
        options={{animationEnabled: false}}
      />
      
    </Stack.Navigator>
  );
};

export default CustomerStack;
