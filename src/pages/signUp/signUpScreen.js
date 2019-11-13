import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomModal from '../../components/modal/customModal';

import styles from './styles';
import backgroundImg from '../../assets/images/background-signin.jpg';

import { create } from '../../services/userApi';

class SignUpScreen extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
    modalVisible: false,
    differentPasswords: false,
    loading: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

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

    if ((password !== '' && passwordAgain !== '') && (password === passwordAgain)) {
      this.setState({ loading: true });
      create(user, this.callbackCreate, this.callbackError);
    } else {
      this.setState({ differentPasswords: true });
    }
  };

  callbackCreate = () => {
    this.setState({ loading: false });
    this.setModalVisible(true);
  }

  callbackError = () => {
    this.setState({ loading: false });
  }

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
                style={this.state.differentPasswords ? styles.differentPasswords : styles.input}
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
                style={this.state.differentPasswords ? styles.differentPasswords : styles.input}
                value={this.state.passwordAgain}
                onChangeText={this.handlePasswordAgainChange}
                placeholder="Insira a senha novamente"
                secureTextEntry
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={this.handleSignUpPress}
              disabled={this.state.loading}
            >
              {this.state.loading
                ? <ActivityIndicator />
                : <Text style={styles.buttonText}>Cadastrar</Text>}
            </TouchableOpacity>
          </View>
        </View>

        <CustomModal
          visible={this.state.modalVisible}
          onButtonPress={() => {
            this.setModalVisible(false);
            this.props.navigation.goBack();
          }}
          text="Usuário cadastrado com sucesso!"
          hasError={false}
        />

      </ImageBackground>
    );
  }
}

SignUpScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SignUpScreen;
