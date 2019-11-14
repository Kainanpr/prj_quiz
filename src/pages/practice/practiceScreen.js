/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Text,
  View,
} from 'native-base';
import IconEntypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';

import CustomHeader from '../../components/header/customHeader';
import CustomModal from '../../components/modal/customModal';

import { getStudy } from '../../services/studyApi';
import { getTest } from '../../services/testApi';

import practiceImg from '../../assets/images/icon-practice-screen.png';
import styles from './styles';

class PracticeScreen extends Component {
  state = {
    study: [],
    test: [],
    modalVisible: false,
    loadingStudy: true,
    loadingTest: true,
  }

  componentDidMount() {
    this.fetchStudy();
    this.fetchTest();
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  fetchStudy = async () => {
    const gameJson = await AsyncStorage.getItem('gameJson');
    const game = JSON.parse(gameJson);

    const chosenLevelJson = await AsyncStorage.getItem('chosenLevelJson');
    const chosenLevel = JSON.parse(chosenLevelJson);

    getStudy(game.contentId, chosenLevel.id, this.callbackSucessGetStudy);
  }

  callbackSucessGetStudy = (study) => {
    this.handleLoadingStudyChange(false);
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
    this.handleLoadingTestChange(false);
    this.setState({ test });
  }

  handleLoadingStudyChange(loadingStudy) {
    this.setState({ loadingStudy });
  }

  handleLoadingTestChange(loadingTest) {
    this.setState({ loadingTest });
  }

  render() {
    const chosenLevel = this.props.navigation.getParam('chosenLevel', {});

    return (
      <Container style={styles.container}>
        <CustomHeader
          onButtonPress={() => { this.props.navigation.goBack(); }}
          titleName={chosenLevel.name}
          hasTabs={false}
        />
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
              disabled={this.state.loadingStudy}
              onPress={() => {
                if (this.state.study.length === 0) {
                  this.setModalVisible(true);
                } else {
                  this.props.navigation.navigate('Study', { study: this.state.study, practice: 'Estude' });
                }
              }}
            >
              <IconEntypo
                name="open-book"
                size={25}
                color="white"
              />
              <Text style={styles.buttonText}>Estude</Text>
              {this.state.loadingStudy && <ActivityIndicator />}
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              iconLeft
              block
              light
              rounded
              style={styles.button}
              disabled={this.state.loadingStudy}
              onPress={() => {
                if (this.state.study.length === 0) {
                  this.setModalVisible(true);
                } else {
                  this.props.navigation.navigate('Train', { study: this.state.study, practice: 'Treine' });
                }
              }}
            >
              <IconEntypo
                name="pencil"
                size={25}
                color="white"
              />
              <Text style={styles.buttonText}>Treine</Text>
              {this.state.loadingStudy && <ActivityIndicator />}
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              iconLeft
              block
              light
              rounded
              style={styles.button}
              disabled={this.state.loadingTest}
              onPress={() => {
                if (this.state.test.length === 0) {
                  this.setModalVisible(true);
                } else {
                  this.props.navigation.navigate('Test', { questions: this.state.test, practice: 'Teste' });
                }
              }}
            >
              <IconEntypo
                name="check"
                size={25}
                color="white"
              />
              <Text style={styles.buttonText}>Teste</Text>
              {this.state.loadingTest && <ActivityIndicator />}
            </Button>
          </View>
        </View>

        <CustomModal
          visible={this.state.modalVisible}
          onButtonPress={() => {
            this.setModalVisible(false);
          }}
          text="Não possui conteúdo cadastrado!"
          hasError
        />

      </Container>
    );
  }
}

PracticeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PracticeScreen;
