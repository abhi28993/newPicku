import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import EditProduct from '../Screens/CatalougeScreen/ProductEdit';
import {EDIT_PRODUCT_SCREEN} from '../Assets/Constant/StringConstant';
import {GlobalStyles} from '../Assets/Colors/Color';

const EditProductStack = () => {
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
        name={EDIT_PRODUCT_SCREEN}
        component={EditProduct}
        options={{animationEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default EditProductStack;
