import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AddCategory from '../Screens/AddProductScreen/AddCategoryScreen/AddCategory';
import {CUSTOMER_DETAIL_SCREENS } from '../Assets/Constant/StringConstant';
import {GlobalStyles} from '../Assets/Colors/Color';
import AddCustomerScreen from '../Screens/BillingScreen/AddCustomerScreen';
import CustomerDetailsScreen from '../Screens/BillingScreen/CustomerDetailsScreen';
import CustomerDetailScreen from '../Screens/BillingScreen/CustomerDetailsScreen';

const CustomerDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.primary500,
        tabBarActiveBackgroundColor: GlobalStyles.colors.primary200,
      }}>
      <Stack.Screen
        name={CUSTOMER_DETAIL_SCREENS}
        component={CustomerDetailScreen}
        options={{animationEnabled: false}}
      />
      
    </Stack.Navigator>
  );
};

export default CustomerDetailStack;
