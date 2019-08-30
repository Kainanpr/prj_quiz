import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableHighlight, TextInput, Image, ImageBackground, StatusBar,
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
    username: '',
    password: '',
  };

  handleEmailChange = (username) => {
    this.setState({ username });
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

  render() {
    return (
      <ImageBackground source={backgroundImg} style={{ flex: 1, resizeMode: 'contain' }}>
        <StatusBar backgroundColor="#218b8f" />
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={quizLogoImg}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={this.state.username}
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
          <TouchableHighlight style={styles.signUpLink}>
            <Text style={styles.signUpLinkText}>Criar conta grátis</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

SignIn.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
