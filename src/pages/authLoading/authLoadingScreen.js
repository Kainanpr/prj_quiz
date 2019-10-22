import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.checkAccess();
  }

  checkAccess = async () => {
    const userTokenJson = await AsyncStorage.getItem('userTokenJson');

    this.props.navigation.navigate(userTokenJson ? 'Home' : 'SignIn');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <ActivityIndicator />
      </View>
    );
  }
}

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AuthLoadingScreen;
