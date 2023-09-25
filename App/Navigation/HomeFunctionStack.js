import * as React from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const HomeTAbStack = createStackNavigator();

import Notification from '../Screens/NoficationScreen/Notification';
import AddComment from '../Screens/AddCommentScreen/AddComment';
import CommentList from '../Screens/CommentListScreen/CommentList';
import Homee from '../Screens/HomeScreen/Home';
import {
  ADD_COMMENT_SCREEN,
  COMMENT_LIST_SCREEN,
  HOME_SCREEN,
  NOTIFICATION_SCREEN,
} from '../Assets/Constant/StringConstant';

const HomeFunctionStack = () => {
  return (
    <View>
      <Text>I am order page</Text>
    </View>
    // <HomeTAbStack.Navigator screenOptions={{headerShown: false}}>
    //   <Stack.Screen
    //     name={HOME_SCREEN}
    //     component={Homee}
    //     options={{animationEnabled: false}}
    //   />
    //   <Stack.Screen
    //     name={COMMENT_LIST_SCREEN}
    //     component={CommentList}
    //     options={{animationEnabled: false}}
    //   />
    //   <Stack.Screen
    //     name={ADD_COMMENT_SCREEN}
    //     component={AddComment}
    //     options={{animationEnabled: false}}
    //   />
    //   <Stack.Screen
    //     name={NOTIFICATION_SCREEN}
    //     component={Notification}
    //     options={{animationEnabled: false}}
    //   />
    // </HomeTAbStack.Navigator>
  );
};

export default HomeFunctionStack;
