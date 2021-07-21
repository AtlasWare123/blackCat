import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import loginScreen from './src/screens/LoginScreen';
import afterLogin  from './src/screens/afterLogin';
import imageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Login: loginScreen,
    AfterLogin: afterLogin,
    ImageScreen: imageScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Reading List',
    },
  }
);

export default createAppContainer(navigator);
