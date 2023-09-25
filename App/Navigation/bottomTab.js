import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './tabstyles';
import OrderStack from './OrderStack';
import BillingStack from './BillingStack';
import CatalogueStack from './CatalogueStack';
import MoneyStack from './MoneyStack';
import MoreStack from './MoreStack';
import {GlobalStyles} from '../Assets/Colors/Color';
import {
  BILLING_STACK,
  CATALOGUE_STACK,
  MONEY_STACK,
  OREDR_STACK,
  MORE_STACK,
} from '../Assets/Constant/StringConstant';

const HomeStack = createBottomTabNavigator();
const BottomTabStack = () => {
  return (
    <HomeStack.Navigator
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: '#fff',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarActiveBackgroundColor: GlobalStyles.colors.primary200,
        headerShown: false,

        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case OREDR_STACK:
              return focused ? (
                <Image
                  source={require('../Assets/Icons/order.png')}
                  style={styles.buttomBarIcons}
                />
              ) : (
                <Image
                  source={require('../Assets/Icons/order.png')}
                  style={styles.buttomBarIcons}
                />
              );
            case BILLING_STACK:
              return focused ? (
                <Image
                  source={require('../Assets/Icons/bill.png')}
                  style={styles.buttomBarIcons}
                />
              ) : (
                <Image
                  source={require('../Assets/Icons/bill.png')}
                  style={styles.buttomBarIcons}
                />
              );

            case CATALOGUE_STACK:
              return focused ? (
                <View style={styles.buttomBarMenuView}>
                  <View>
                    <Image
                      source={require('../Assets/Icons/catalogue.png')}
                      style={styles.buttomBarIcons}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.buttomBarMenuView}>
                  <View>
                    <Image
                      source={require('../Assets/Icons/catalogue.png')}
                      style={styles.buttomBarIcons}
                    />
                  </View>
                </View>
              );
            case MORE_STACK:
              return focused ? (
                <Image
                  source={require('../Assets/Icons/more.png')}
                  style={styles.buttomBarIcons}
                />
              ) : (
                <Image
                  source={require('../Assets/Icons/more.png')}
                  style={styles.buttomBarIcons}
                />
              );
            default:
              break;
          }
        },
      })}>
      <HomeStack.Screen name={OREDR_STACK}  component={OrderStack} focused/>
      <HomeStack.Screen name={BILLING_STACK} options={{headerShown:true}} component={BillingStack}/>
      <HomeStack.Screen name={CATALOGUE_STACK} component={CatalogueStack} />
      <HomeStack.Screen name={MORE_STACK} component={MoreStack} focused />
    </HomeStack.Navigator>


  );
};

export default BottomTabStack;
