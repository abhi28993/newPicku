import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {
//   ADD_PRODUCT_SCREEN,
//   ADD_CATALOUGE_SCREEN,
// } from '../Assets/Constant/StringConstant';
import SupplierList from '../Screens/BillingScreen/SupplierList';
import CustomerList from '../Screens/BillingScreen/CustomerList';

const Tab = createMaterialTopTabNavigator();

const BillingStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#3e04c3'},
        // indicatorStyle:"white"
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: 4,
        },
      }}>
      <Tab.Screen
        name="customer"
        component={CustomerList}
        options={{animationEnabled: true}}
      />
      <Tab.Screen
        name="supplier"
        component={SupplierList}
        options={{animationEnabled: true}}
      />
    </Tab.Navigator>
  );
};

export default BillingStack;
