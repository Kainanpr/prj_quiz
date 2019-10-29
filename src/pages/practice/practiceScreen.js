/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import {
  Icon,
  Button,
  Container,
  Body,
  Header,
  Title,
  Left,
  Text,
  Right,
  View,
} from 'native-base';
import IconEntypo from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-community/async-storage';

import { getStudy } from '../../services/study/studyApi';
import { getTest } from '../../services/test/testApi';

import practiceImg from '../../assets/images/icon-practice-screen.png';
import styles from './styles';

class ChooseThemeScreen extends Component {
  state = {
    study: [],
    test: [],
  }

  componentDidMount() {
    this.fetchStudy();
    this.fetchTest();
  }

  fetchStudy = async () => {
    const gameJson = await AsyncStorage.getItem('gameJson');
    const game = JSON.parse(gameJson);

    const chosenLevelJson = await AsyncStorage.getItem('chosenLevelJson');
    const chosenLevel = JSON.parse(chosenLevelJson);

    getStudy(game.contentId, chosenLevel.id, this.callbackSucessGetStudy);
  }

  callbackSucessGetStudy = (study) => {
    this.setState({ study });
  }

  fetchTest = async () => {
    const gameJson = await AsyncStorage.getItem('gameJson');
    const game = JSON.parse(gameJson);

    const chosenLevelJson = await AsyncStorage.getItem('chosenLevelJson');
    const chosenLevel = JSON.parse(chosenLevelJson);

    getTest(game.contentId, chosenLevel.id, this.callbackSucessGetTest);
  }

  callbackSucessGetTest = (test) => {
    this.setState({ test });
  }

  render() {
    const chosenLevel = this.props.navigation.getParam('chosenLevel', {});

    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor="#186078" style={styles.header}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 4 }}>
            <Title>{chosenLevel.name}</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <View style={styles.content}>
          <View style={styles.containerLogo}>
            <Image
              style={styles.logo}
              source={practiceImg}
              resizeMode="contain"
            />
            <Text style={styles.text}>O que você quer praticar hoje?</Text>
          </View>
          <View style={styles.containerButton}>
            <Button
              iconLeft
              block
              light
              rounded
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Study', { study: this.state.study, practice: 'Estude' })}
            >
              <IconEntypo
                name="open-book"
                size={25}
                color="white"
              />
              <Text style={styles.buttonText}>Estude</Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              iconLeft
              block
              light
              rounded
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Train', { study: this.state.study, practice: 'Treine' })}
            >
              <IconEntypo
                name="pencil"
                size={25}
                color="white"
              />
              <Text style={styles.buttonText}>Treine</Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              iconLeft
              block
              light
              rounded
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Test', { questions: this.state.test, practice: 'Teste' })}
            >
              <IconEntypo
                name="check"
                size={25}
                color="white"
              />
              <Text style={styles.buttonText}>Teste</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

ChooseThemeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChooseThemeScreen;
