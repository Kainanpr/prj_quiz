/* eslint-disable react/prop-types */
import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthLoadingScreen from './pages/authLoading/authLoadingScreen';
import SignInScreen from './pages/signIn/signInScreen';
import SignUpScreen from './pages/signUp/signUpScreen';
import HomeScreen from './pages/home/homeScreen';
import ProfileScreen from './pages/profile/profileScreen';
import ChooseThemeScreen from './pages/chooseTheme/chooseThemeScreen';
import ChooseContentScreen from './pages/chooseContent/chooseContentScreen';
import ChooseLevelsScreen from './pages/chooseLevels/chooseLevelsScreen';
import PracticeScreen from './pages/practice/practiceScreen';
import StudyScreen from './pages/study/studyScreen';
import TestScreen from './pages/test/testScreen';
import SideBar from './components/sideBar/sideBar';

const SignInStack = createStackNavigator({
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen },
}, {
  initialRouteName: 'SignIn',
  headerMode: 'none',
});

const StartingGameStack = createStackNavigator({
  Home: { screen: HomeScreen },
  ChooseTheme: { screen: ChooseThemeScreen },
  ChooseContent: { screen: ChooseContentScreen },
  ChooseLevels: { screen: ChooseLevelsScreen },
  Practice: { screen: PracticeScreen },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

const HomeDrawer = createDrawerNavigator({
  StartingGameStack,
  Profile: { screen: ProfileScreen },
  Study: { screen: StudyScreen },
  Test: { screen: TestScreen },
}, {
  contentComponent: ({ navigation }) => <SideBar navigation={navigation} />,
});

const AppContainer = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  SignInStack,
  HomeDrawer,
});

export default createAppContainer(AppContainer);
