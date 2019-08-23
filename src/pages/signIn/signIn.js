import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput, Image} from 'react-native';
import styles from './styles.js';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    password: '',
  };

  handleEmailChange = username => {
    this.setState({username});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignInPress = () => {
    const {username} = this.state;

    this.props.navigation.navigate('Home', {
      username,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/ifsp_logo.png')}
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
          onPress={this.handleSignInPress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.signUpLink}>
          <Text style={styles.signUpLinkText}>Criar conta grátis</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
