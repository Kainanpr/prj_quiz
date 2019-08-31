import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableHighlight, TextInput,
  Image, ImageBackground, StatusBar, TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import quizLogoImg from '../../assets/images/signIn/quiz_logo.png';
import backgroundImg from '../../assets/images/signIn/background-signin.jpg';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
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

  handleSignInPress = async () => {
    await AsyncStorage.setItem('userToken', 'Kainan');
    this.props.navigation.navigate('Home');
  };

  handleSignUpPress = () => {
    console.log('Tela criar conta');
  };

  render() {
    return (
      <ImageBackground source={backgroundImg} style={{ flex: 1, resizeMode: 'contain' }}>
        <StatusBar backgroundColor="#218b8f" />
        <View style={styles.container}>
          <View style={styles.containerLogo}>
            <Image
              style={styles.logo}
              source={quizLogoImg}
              resizeMode="contain"
            />
          </View>
          <View style={styles.containerForm}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
            <TouchableHighlight
              style={styles.button}
              underlayColor="rgba(24,96,120,1)"
              onPress={this.handleSignInPress}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableHighlight>
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

SignIn.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
