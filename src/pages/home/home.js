import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './styles.js';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#008000',
    },
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
    username: PropTypes.string,
  };

  render() {
    const {navigation} = this.props;
    const username = navigation.getParam('username');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {username}</Text>
      </View>
    );
  }
}
