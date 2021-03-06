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
import ChooseThemeScreen from './pages/chooseTheme/chooseThemeScreen';
import ChooseContentScreen from './pages/chooseContent/chooseContentScreen';
import ChooseLevelsScreen from './pages/chooseLevels/chooseLevelsScreen';
import PracticeScreen from './pages/practice/practiceScreen';
import StudyScreen from './pages/study/studyScreen';
import TrainScreen from './pages/train/trainScreen';
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
  Study: { screen: StudyScreen },
  Train: { screen: TrainScreen },
  Test: { screen: TestScreen },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

const HomeDrawer = createDrawerNavigator({
  StartingGameStack,
}, {
  contentComponent: ({ navigation }) => <SideBar navigation={navigation} />,
});

const AppContainer = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  SignInStack,
  HomeDrawer,
});

export default createAppContainer(AppContainer);
