/* eslint-disable react/prop-types */
import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import SignInScreen from './pages/signIn/signInScreen';
import HomeScreen from './pages/home/homeScreen';
import ProfileScreen from './pages/profile/profileScreen';
import SideBar from './components/sideBar/sideBar';

const SignInStack = createStackNavigator({
  SignIn: { screen: SignInScreen },
});

const HomeDrawer = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}, {
  contentComponent: ({ navigation }) => <SideBar navigation={navigation} />,
});

const AppContainer = createSwitchNavigator({
  SignInStack,
  HomeDrawer,
});

export default createAppContainer(AppContainer);
