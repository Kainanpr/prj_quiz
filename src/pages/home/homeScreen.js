import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View, Image, ActivityIndicator } from 'react-native';
import {
  Button,
  Text,
  Container,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import CustomHeader from '../../components/header/customHeader';

import quizLogoImg from '../../assets/images/quiz_logo_simbolo.png';
import ifspLogoImg from '../../assets/images/ifsp_logo.png';
import backgroundImg from '../../assets/images/background-signin.jpg';
import styles from './styles';
import { userAuthenticated } from '../../services/userApi';

class HomeScreen extends Component {
  state = {
    loading: false,
  }

  fetchUserAuthenticated = async () => {
    userAuthenticated(this.callbackSuccess, this.callbackErrorTokenExpired, this.callbackAnyError);
  }

  callbackAnyError = async () => {
    this.handleLoadingChange(false);
  }

  callbackErrorTokenExpired = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('SignInStack');
  }

  callbackSuccess = async (response) => {
    this.handleLoadingChange(false);
    await AsyncStorage.setItem('userAuthenticatedJson', JSON.stringify(response));
    this.props.navigation.navigate('ChooseTheme');
  }

  handlePlayPress = async () => {
    this.handleLoadingChange(true);
    this.fetchUserAuthenticated();
  }

  handleLoadingChange = (loading) => {
    this.setState({ loading });
  }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.imageBackgroundContainer}>
        <Container style={styles.container}>
          <CustomHeader
            onButtonPress={() => this.props.navigation.openDrawer()}
            titleName="Página inicial"
            iconName="menu"
            hasTabs={false}
          />
          <View padder style={styles.content}>
            <View style={styles.containerLogoQuiz}>
              <Image
                style={styles.logoQuiz}
                source={quizLogoImg}
                resizeMode="contain"
              />
              <Button
                style={styles.button}
                iconLeft
                rounded
                block
                transparent
                disabled={this.state.loading}
                onPress={this.handlePlayPress}
              >
                <Text style={styles.buttonText}>JOGAR</Text>
                {this.state.loading && <ActivityIndicator color="white" />}
              </Button>
            </View>
            <View style={styles.containerLogoIfsp}>
              <Image
                style={styles.logoIfsp}
                source={ifspLogoImg}
                resizeMode="contain"
              />
            </View>
          </View>
        </Container>
      </ImageBackground>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HomeScreen;
