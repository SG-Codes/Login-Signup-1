import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Signup from './src/SIngup';
import LoggedIn from './src/LoggedIn';

const Stack = createStackNavigator();

export default function() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login' headerMode='false' >
          <Stack.Screen component={Login} name='login' />
          <Stack.Screen component={LoggedIn} name='home' />
          <Stack.Screen component={Signup} name='signup' />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
