import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#008000',
    },
  };

  render() {
    return (
      <View>
        <Text>Home page</Text>
      </View>
    );
  }
}
