/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Image, TouchableOpacity, Modal, Alert } from 'react-native';
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

import { getStudy } from '../../services/studyApi';
import { getTest } from '../../services/testApi';

import practiceImg from '../../assets/images/icon-practice-screen.png';
import styles from './styles';

class ChooseThemeScreen extends Component {
  state = {
    study: [],
    test: [],
    modalVisible: false,
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

  showModal = () => (
    <Modal
      animationType="fade"
      transparent
      visible={this.state.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <View style={styles.containerModal}>
        <View style={styles.contentModal}>
          <Text style={styles.textError}>Não possui conteúdo cadastrado!</Text>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(false);
            }}
          >
            <Text>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )

  render() {
    const chosenLevel = this.props.navigation.getParam('chosenLevel', {});
    const onReturnedToLevelPage = this.props.navigation.getParam('onReturnedToLevelPage', () => {});

    return (
      <Container style={styles.container}>
        <CustomHeader
          onButtonPress={() => {
            onReturnedToLevelPage(true);
            this.props.navigation.goBack();
          }}
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
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              iconLeft
              block
              light
              rounded
              style={styles.button}
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
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              iconLeft
              block
              light
              rounded
              style={styles.button}
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
            </Button>
          </View>
        </View>

        {this.showModal()}

      </Container>
    );
  }
}

ChooseThemeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChooseThemeScreen;
