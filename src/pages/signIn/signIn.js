import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

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
          source={require('../../images/ifsp_logo.png')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  logo: {
    height: '30%',
    marginBottom: 40,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    marginBottom: 15,
    marginHorizontal: 20,
    fontSize: 16,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#FC6663',
    alignSelf: 'stretch',
    margin: 15,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  signUpLink: {
    padding: 10,
    marginTop: 20,
  },
  signUpLinkText: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
