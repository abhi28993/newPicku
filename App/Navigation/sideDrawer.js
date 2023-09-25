import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SlideMenu from './slideMenu';
import BottomTabStack from './bottomTab';
// import SettingStack from './SettingStack';
// import AllChatStack from './AllChatStack';
// import TayconRules from '../Screens/TayconRulesScreen/TayconRules';
import {
  ALL_CHAT_STACK,
  BOTTOM_STACK,
  SETTING_STACK,
  TAYCONRULES_SCREEN,
} from '../Assets/Constant/StringConstant';

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SlideMenu {...props} />}>
      <Drawer.Screen
        name={BOTTOM_STACK}
        component={BottomTabStack}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name={ALL_CHAT_STACK}
        component={AllChatStack}
        options={{headerShown: false}}
      /> */}
      {/* <Drawer.Screen
        name={SETTING_STACK}
        component={SettingStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={TAYCONRULES_SCREEN}
        component={TayconRules}
        options={{headerShown: false}}
      /> */}
    </Drawer.Navigator>
  );
};

export default SideDrawer;
