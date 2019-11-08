import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
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
  Radio,
} from 'native-base';
import * as Progress from 'react-native-progress';

import AsyncStorage from '@react-native-community/async-storage';

import { NavigationEvents } from 'react-navigation';

import { updateGame } from '../../services/gameApi';

import styles from './styles';

class TestScreen extends Component {
  state = {
    remainder: undefined,
    selectedOption: undefined,
    numberQuestion: 0,
    questions: [],
    currentQuestion: {},
    wrongQuestions: [],
    chosenAnswer: '',
    modalVisible: false,
  }

  setQuestions() {
    const questions = this.props.navigation.getParam('questions', {});

    this.setState({
      remainder: questions.length,
      questions,
      currentQuestion: questions[0],
      selectedOption: undefined,
      numberQuestion: 0,
      wrongQuestions: [],
      chosenAnswer: '',
      modalVisible: false,
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  toggleRadio = (option, chosenAnswer) => {
    this.setState({
      selectedOption: option,
      chosenAnswer,
    });
  }

  handleAnswer = () => {
    if (!this.state.selectedOption) {
      return;
    }

    const {
      questions, currentQuestion, chosenAnswer, wrongQuestions, numberQuestion, remainder,
    } = this.state;

    const nextNumberQuestion = numberQuestion + 1;

    if (chosenAnswer !== currentQuestion.answer) {
      this.setState({
        wrongQuestions: [...wrongQuestions, currentQuestion.id],
        remainder: remainder - 1,
      }, () => {
        console.log(this.state.wrongQuestions);
      });
    }

    if (nextNumberQuestion !== questions.length) {
      this.setState({
        currentQuestion: questions[nextNumberQuestion],
        numberQuestion: nextNumberQuestion,
        selectedOption: undefined,
        remainder: remainder - 1,
      }, () => {
        console.log(this.state.wrongQuestions);
      });
    } else {
      this.setState({ modalVisible: true });
    }
  }

  passedLevel = async () => {
    const { questions } = this.state;

    const token = await AsyncStorage.getItem('token');

    const gameJson = await AsyncStorage.getItem('gameJson');
    const game = JSON.parse(gameJson);

    const chosenLevelJson = await AsyncStorage.getItem('chosenLevelJson');
    const chosenLevel = JSON.parse(chosenLevelJson);

    if (chosenLevel.id === game.levelId) {
      updateGame(token, { ...game, levelId: chosenLevel.id + 1 }, this.callbackSucessUpdateGame);
    }

    this.setState({
      selectedOption: undefined,
      numberQuestion: 0,
      currentQuestion: questions[0],
      wrongQuestions: [],
      chosenAnswer: '',
      modalVisible: false,
    }, () => {
      this.props.navigation.goBack();
    });
  }

  callbackSucessUpdateGame = async (newGame) => {
    await AsyncStorage.setItem('gameJson', JSON.stringify(newGame));
  }

  remake = () => {
    const { questions } = this.state;

    this.setState({
      remainder: questions.length,
      selectedOption: undefined,
      numberQuestion: 0,
      currentQuestion: questions[0],
      wrongQuestions: [],
      chosenAnswer: '',
      modalVisible: false,
    });
  }

  showModal = () => {
    const { wrongQuestions } = this.state;

    const passedLevel = wrongQuestions.length === 0;

    return (
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
            <Text
              style={passedLevel ? styles.textPassed : styles.textNotPassed}
            >
              {passedLevel
                ? 'Parabéns, o próximo nível foi liberado!'
                : `Você errou ${wrongQuestions.length} ${wrongQuestions.length === 1 ? 'questão' : 'questões'}!`}
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (passedLevel) {
                  this.passedLevel();
                } else {
                  this.remake();
                }
              }}
            >
              <Text>
                {passedLevel
                  ? 'Continuar'
                  : 'Refazer'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    const practiceName = this.props.navigation.getParam('practice', {});

    return (
      <Container style={styles.container}>
        <NavigationEvents onWillFocus={() => { this.setQuestions(); }} />
        <Header androidStatusBarColor="#186078" style={styles.header}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 4 }}>
            <Title>{practiceName}</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <ScrollView>
          {!this.state.modalVisible && (
            <View style={styles.content}>
              <View style={styles.containerProgress}>
                <Progress.Bar
                  progress={this.state.questions.length
                    ? this.state.remainder / this.state.questions.length : 1}
                  color="#4257b2"
                  unfilledColor="#c6cce8"
                  width={null}
                  // borderWidth={0}
                />
                <View style={styles.textProgress}>
                  <Text>RESTANTES</Text>
                  <Text>{this.state.remainder}</Text>
                </View>
              </View>
              <View style={styles.containerQuestion}>
                <Text style={styles.textQuestion}>Question {this.state.numberQuestion + 1}:</Text>
                <Text>{this.state.currentQuestion.question}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.toggleRadio(1, this.state.currentQuestion.option1)}
              >
                <View
                  style={styles.containerOption}
                >
                  <Radio
                    selected={this.state.selectedOption === 1}
                    onPress={() => this.toggleRadio(1, this.state.currentQuestion.option1)}
                  />
                  <Text style={styles.textOption}>{this.state.currentQuestion.option1}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.toggleRadio(2, this.state.currentQuestion.option2)}
              >
                <View
                  style={styles.containerOption}
                >
                  <Radio
                    selected={this.state.selectedOption === 2}
                    onPress={() => this.toggleRadio(2, this.state.currentQuestion.option2)}
                  />
                  <Text style={styles.textOption}>{this.state.currentQuestion.option2}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.toggleRadio(3, this.state.currentQuestion.option3)}
              >
                <View
                  style={styles.containerOption}
                >
                  <Radio
                    selected={this.state.selectedOption === 3}
                    onPress={() => this.toggleRadio(3, this.state.currentQuestion.option3)}
                  />
                  <Text style={styles.textOption}>{this.state.currentQuestion.option3}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.toggleRadio(4, this.state.currentQuestion.option4)}
              >
                <View
                  style={styles.containerOption}
                >
                  <Radio
                    selected={this.state.selectedOption === 4}
                    onPress={() => this.toggleRadio(4, this.state.currentQuestion.option4)}
                  />
                  <Text style={styles.textOption}>{this.state.currentQuestion.option4}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.toggleRadio(5, this.state.currentQuestion.option5)}
              >
                <View
                  style={styles.containerOption}
                >
                  <Radio
                    selected={this.state.selectedOption === 5}
                    onPress={() => this.toggleRadio(5, this.state.currentQuestion.option5)}
                  />
                  <Text style={styles.textOption}>{this.state.currentQuestion.option5}</Text>
                </View>
              </TouchableOpacity>

              <Button
                rounded
                block
                style={{ marginVertical: 20, backgroundColor: '#186078' }}
                onPress={() => this.handleAnswer()}
              >
                <Text>Responder</Text>
              </Button>
            </View>
          )}

          {this.showModal()}

        </ScrollView>
      </Container>
    );
  }
}

TestScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TestScreen;
