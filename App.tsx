/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/components/Auth/Login';
import Register from './src/components/Auth/Register';
import OtpVerify from './src/components/Auth/OtpVerify';
import NewPassword from './src/components/Auth/NewPassword';
import ForgotPassword from './src/components/Auth/ForgotPassword';
import DashBoard from './src/components/Home/Dashboard';

function App() {
  LogBox.ignoreAllLogs();
  const Stack = createNativeStackNavigator();

  useEffect(()=>{
    SplashScreen.hide()
 })

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
