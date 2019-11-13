import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TextInput, ActivityIndicator,
  Image, ImageBackground, StatusBar, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import themeColors from '../../constants/themeColors';
import quizLogoImg from '../../assets/images/quiz_logo.png';
import backgroundImg from '../../assets/images/background-signin.jpg';

import { login } from '../../services/userApi';

export default class SignInScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
    loading: false,
    error: false,
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignInPress = () => {
    this.setState({ loading: true });
    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    login(user, this.callbackSuccess, this.callbackError);
  };

  callbackSuccess = async (response) => {
    this.setState({ loading: false });
    await AsyncStorage.setItem('token', response);
    this.props.navigation.navigate('Home');
  }

  callbackError = () => {
    this.setState({ error: true, loading: false });
  }

  handleSignUpPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.imageBackgroundContainer}>
        <StatusBar backgroundColor={themeColors.headerNotAuthenticated.statusBarColor} />
        <View style={styles.container}>
          <View style={styles.containerLogo}>
            <Image
              style={styles.logo}
              source={quizLogoImg}
              resizeMode="contain"
            />
          </View>
          <View style={styles.containerForm}>
            <View>
              <Icon
                name="ios-mail"
                size={28}
                color="#ffffff"
                style={styles.inputIcon}
              />
              <TextInput
                style={this.state.error ? styles.error : styles.input}
                placeholder="E-mail"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View>
              <Icon
                name="ios-lock"
                size={28}
                color="#ffffff"
                style={styles.inputIcon}
              />
              <TextInput
                style={this.state.error ? styles.error : styles.input}
                placeholder="Senha"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleSignInPress}
              disabled={this.state.loading}
            >
              {this.state.loading
                ? <ActivityIndicator />
                : <Text style={styles.buttonText}>Entrar</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signUpLink}
              onPress={this.handleSignUpPress}
            >
              <Text style={styles.signUpLinkText}>Criar conta grátis</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

SignInScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
