import * as React from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const ReviewTAbStack = createStackNavigator();

import Notification from '../Screens/NoficationScreen/Notification';
import Review from '../Screens/ReviewScreen/Review';
import ReviewList from '../Screens/ReviewListScreen/ReviewList';
import CommentReview from '../Screens/CommentReviewScreen/CommentReview';
import PendingReview from '../Screens/PendingReviewScreen/PendingReview';
import NewTranding from '../Screens/NewTrendingScreen/NewTranding';
import {
  COMMENT_REVIEW_SCREEN,
  NEW_TRANDING_SCREEN,
  NOTIFICATION_SCREEN,
  PENDING_REVIEW_SCREEN,
  REVIEW_LIST_SCREEN,
  REVIEW_SCREEN,
} from '../Assets/Constant/StringConstant';

const ReviewStack = () => {
  return (
    <ReviewTAbStack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={REVIEW_SCREEN}
        component={Review}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={REVIEW_LIST_SCREEN}
        component={ReviewList}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={COMMENT_REVIEW_SCREEN}
        component={CommentReview}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={PENDING_REVIEW_SCREEN}
        component={PendingReview}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={NEW_TRANDING_SCREEN}
        component={NewTranding}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={NOTIFICATION_SCREEN}
        component={Notification}
        options={{animationEnabled: false}}
      />
    </ReviewTAbStack.Navigator>
  );
};

export default ReviewStack;
