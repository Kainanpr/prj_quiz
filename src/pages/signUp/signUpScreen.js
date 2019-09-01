import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import backgroundImg from '../../assets/images/background-signin.jpg';

class SignUpScreen extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  };

  handleNameChange = (name) => {
    this.setState({ name });
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  handlePasswordAgainChange = (passwordAgain) => {
    this.setState({ passwordAgain });
  }

  handleSignUpPress = () => {
    const { name, email, password, passwordAgain } = this.state;
    const user = { name, email, password, passwordAgain };
    console.log('Saving user: ', user);
  };

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.imageBackgroundContainer}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>Faça seu cadastro</Text>
            <View style={styles.line} />
            <Text style={styles.fraseHeader}>Insira alguns dados abaixo:</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Icon
                name="ios-person"
                size={28}
                color="#ffffff"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={this.handleNameChange}
                placeholder="Nome Completo"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="ios-mail"
                size={28}
                color="#ffffff"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                placeholder="E-mail"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="ios-lock"
                size={28}
                color="#ffffff"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                placeholder="Senha"
                secureTextEntry
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="ios-lock"
                size={28}
                color="#ffffff"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={this.state.passwordAgain}
                onChangeText={this.handlePasswordAgainChange}
                placeholder="Insira a senha novamente"
                secureTextEntry
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity style={styles.buttonSignUp} onPress={this.handleSignUpPress}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default SignUpScreen;
