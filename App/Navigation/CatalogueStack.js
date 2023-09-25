import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductList from '../Screens/CatalougeScreen/ProductList';
import CategoryList from '../Screens/CatalougeScreen/CategoryList';
import {
  ADD_PRODUCT_SCREEN,
  ADD_CATALOUGE_SCREEN,
} from '../Assets/Constant/StringConstant';

const Tab = createMaterialTopTabNavigator();

const CatalogueStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={ADD_CATALOUGE_SCREEN}
        component={CategoryList}
        options={{animationEnabled: false}}
        
      />
      <Tab.Screen
        name={ADD_PRODUCT_SCREEN}
        component={ProductList}
        options={{animationEnabled: false}}
      />
    </Tab.Navigator>
  );
};

export default CatalogueStack;
