import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/native-stack';
// Stacks
import SplashScreen from '../Screens/SplashScreen/Splash';
import LoginScreen from '../Screens/LoginScreen/Login';
import SignUpScreen from '../Screens/SignUpScreen/SignUp';
import AddProductStack from './AddProductStack';
import SupplierStack from './SupplierStack';
import CustomerStack from './CustomerStack';
import BottomTabStack from '../Navigation/bottomTab';
import AddCategoryStack from "./AddCatagoryStack";
import EditProductStack from "./EditProductStack"; 
import EditCategoryStack from "./EditCategoryStack";
import {
  SPLASH_SCREEN,
  SLIDE_SCREEN,
  LOGIN_SCREEN,
  SIGNUP_SCREEN,
  BOTTOM_STACK,
  ADD_CATEGORY_STACK,
  OTP_SCREEN,
  ADD_PRODUCT_STACK,
  EDIT_PRODUCT_STACK,
  EDIT_CATEGORY_STACK,
  SUPPLIER_STACK,
  CUSTOMER_STACK,
  CUSTOMER_DETAIL_STACK,
  CUSTOMER_BILLS_STACK,
  SUPPLIER_DETAIL_STACK
} from '../Assets/Constant/StringConstant';
import OtpVerify from '../Screens/OtpScreen/Otp';
import CustomerDetailStack from './CustomerDetailStack';
import CustomerBillStack from './CustomerBillStack';
import SupplierDetailStack from './SupplierDetailStack';
// import SideDrawer from './sideDrawer'

const Stack = createNativeStackNavigator();
// For full stack and auth screens
const AllStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SPLASH_SCREEN}
        component={SplashScreen}
        options={{animationEnabled: false}}  
      />
      <Stack.Screen
        name={LOGIN_SCREEN}
        component={LoginScreen}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={OTP_SCREEN}
        component={OtpVerify}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={BOTTOM_STACK}
        component={BottomTabStack}
      />

      <Stack.Screen
        name={SIGNUP_SCREEN}
        component={SignUpScreen}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={ADD_CATEGORY_STACK}
        component={AddCategoryStack}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={ADD_PRODUCT_STACK}
        component={AddProductStack}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={EDIT_PRODUCT_STACK}
        component={EditProductStack}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={EDIT_CATEGORY_STACK}
        component={EditCategoryStack}
        options={{animationEnabled: false}}
      />
     
      <Stack.Screen
        name={CUSTOMER_STACK}
        component={CustomerStack}
        options={{animationEnabled: false}}
      />  
      <Stack.Screen
        name={CUSTOMER_DETAIL_STACK}
        component={CustomerDetailStack}
        options={{animationEnabled: false}}
      />  
      <Stack.Screen
        name={SUPPLIER_DETAIL_STACK}
        component={SupplierDetailStack}
        options={{animationEnabled: false}}
      />  
    
       <Stack.Screen
        name={SUPPLIER_STACK}
        component={SupplierStack}
        options={{animationEnabled: false}}
  />
    
       <Stack.Screen
        name={CUSTOMER_BILLS_STACK}
        component={CustomerBillStack}
        options={{animationEnabled: false}}
  />
    </Stack.Navigator>
  );
};

export default AllStacks;
