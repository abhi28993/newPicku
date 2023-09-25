import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AllStacks from './App/Navigation/router';
import {Provider} from 'react-redux';
import store from './App/redux/Store/store';

const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <AllStacks />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
