import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import AddProduct from '../Screens/AddProductScreen/AddProduct';
import {ADD_PRODUCT_SCREEN} from '../Assets/Constant/StringConstant';
import {GlobalStyles} from '../Assets/Colors/Color';

const AddProductStack = () => {
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
        name={ADD_PRODUCT_SCREEN}
        component={AddProduct}
        options={{animationEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AddProductStack;
