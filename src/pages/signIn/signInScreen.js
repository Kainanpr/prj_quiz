import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableHighlight, TextInput,
  Image, ImageBackground, StatusBar, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import quizLogoImg from '../../assets/images/quiz_logo.png';
import backgroundImg from '../../assets/images/background-signin.jpg';

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
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.imageBackgroundContainer}>
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
            <View>
              <Icon
                name="ios-mail"
                size={28}
                color="#ffffff"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
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
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={this.handleSignInPress}>
              <Text style={styles.buttonText}>Entrar</Text>
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

SignIn.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
