import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import OrderScreen from '../Screens/OrderScreen/Order';
import {ORDER_POST_SCREEN} from '../Assets/Constant/StringConstant';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import NewOrder from '../Screens/OrderScreen/NewOrder';
import AcceptedOrder from '../Screens/OrderScreen/AcceptedOrder';
import RejectedOrder from '../Screens/OrderScreen/RejectedOrder';
import PackedOrder from '../Screens/OrderScreen/PackedOrder';
import ShippedOrder from '../Screens/OrderScreen/ShippedOrder';
import DeliveredOrder from '../Screens/OrderScreen/DeliveredOrder';
import OrderDetail from '../Screens/OrderScreen/OrderDetail';
import ProductDetail from "../Screens/OrderScreen/ProductDetail"
import ProductEdit from '../Screens/CatalougeScreen/ProductEdit';
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
        name={ORDER_POST_SCREEN}
        component={OrderScreen}
        options={{animationEnabled: false, headerShown: false}}
      />
      <Stack.Screen
        name="new"
        options={{headerTitle: 'New Order'}}
        component={NewOrder}
      />
      {/* <Stack.Screen
        name="accepted"
        options={{headerTitle: 'Accepted Order'}}
        component={AcceptedOrder}
      />
      <Stack.Screen
        name="rejected"
        options={{headerTitle: 'Rejected Order'}}
        component={RejectedOrder}
      />
      <Stack.Screen
        name="packed"
        options={{headerTitle: 'Packed Order'}}
        component={PackedOrder}
      />
      <Stack.Screen
        name="shipped"
        options={{headerTitle: 'Shipped Order'}}
        component={ShippedOrder}
      />
      <Stack.Screen
        name="delivered"
        options={{headerTitle: 'Delivered Order'}}
        component={DeliveredOrder}
      /> */}
      <Stack.Screen
        name="orderDetail"
        options={{headerTitle: 'Order Detail'}}
        component={OrderDetail}
      />
      <Stack.Screen
        name="productDetail"
        options={{headerTitle: 'Product Detail'}}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
