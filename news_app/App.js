import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Header from './src/components/Header';


const App = () => {
  return (
      <Provider store={store}>
        <Header />
        <AppNavigator />
      </Provider>
    
  );
}

export default App;