import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Login from '../screens/Login';

const AppStack = createStackNavigator();

const AppStackNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Login" component={Login} />
  </AppStack.Navigator>
);

const AppContainer = () => {
    return (
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    );
  };

export default AppContainer;