import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
