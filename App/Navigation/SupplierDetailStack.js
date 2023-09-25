import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { SUPPLIER_DETAIL_SCREENS } from '../Assets/Constant/StringConstant';
import {GlobalStyles} from '../Assets/Colors/Color';
import SupplierDetailScreen from '../Screens/BillingScreen/SupplierDetailScreen';


const SupplierDetailStack = () => {
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
        name={SUPPLIER_DETAIL_SCREENS}
        component={SupplierDetailScreen}
        options={{animationEnabled: false}}
      />
      
    </Stack.Navigator>
  );
};

export default SupplierDetailStack;
