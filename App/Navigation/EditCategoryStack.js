import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import EditCategory from '../Screens/CatalougeScreen/CategoryEdit';
import {EDIT_CATEGORY_SCREEN} from '../Assets/Constant/StringConstant';
import {GlobalStyles} from '../Assets/Colors/Color';

const EditCategoryStack = () => {
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
        name={EDIT_CATEGORY_SCREEN}
        component={EditCategory}
        options={{animationEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default EditCategoryStack;
