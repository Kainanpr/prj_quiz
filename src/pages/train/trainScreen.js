import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native';
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

import * as Progress from 'react-native-progress';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Tts from 'react-native-tts';

import AsyncStorage from '@react-native-community/async-storage';

import { getStudy } from '../../services/study/studyApi';

import styles from './styles';

const SHOW_CONTENT = {
  insertAnswer: 'INSERT_ANSWER',
  correct: 'CORRECT',
  incorrect: 'INCORRECT',
  doNotKnow: 'DO_NOT_KNOW',
};

class TrainScreen extends Component {
  state = {
    study: [],
    remainder: undefined,
    incorrect: 0,
    correct: 0,
    showContent: SHOW_CONTENT.insertAnswer,
    tryAnswer: '',
    copyAnswer: '',
    word: '',
    answer: '',
    count: 0,
  }

  componentDidMount() {
    this.fetchTrain();
  }

  fetchTrain = async () => {
    const gameJson = await AsyncStorage.getItem('gameJson');
    const game = JSON.parse(gameJson);

    const chosenLevelJson = await AsyncStorage.getItem('chosenLevelJson');
    const chosenLevel = JSON.parse(chosenLevelJson);

    getStudy(game.contentId, chosenLevel.id, this.callbackSucessGetStudy);
  }

  callbackSucessGetStudy = (study) => {
    const { count } = this.state;

    this.setState({
      study,
      remainder: study.length,
      word: study[count].translation,
      answer: study[count].word,
    });
  }

  handleDoNotKnowClick = () => {
    const { incorrect, remainder } = this.state;

    this.setState({
      showContent: SHOW_CONTENT.doNotKnow,
      incorrect: incorrect + 1,
      remainder: remainder - 1,
    });
  }

  handleTryAnswerChange = (input) => {
    this.setState({
      tryAnswer: input,
    });
  }

  handleAnswerClick = () => {
    const { study, answer, count, tryAnswer, correct, incorrect, remainder } = this.state;
    const nextIndex = count + 1;

    if (tryAnswer.toLowerCase() === answer.toLowerCase()) {
      if (nextIndex !== study.length) {
        this.setState({
          tryAnswer: '',
          showContent: SHOW_CONTENT.correct,
          correct: correct + 1,
          remainder: remainder - 1,
        });
      } else {
        this.setState({
          word: '',
          answer: '',
          tryAnswer: '',
          showContent: SHOW_CONTENT.correct,
          correct: correct + 1,
          remainder: remainder - 1,
        });
      }
    } else if (tryAnswer) {
      if (nextIndex !== study.length) {
        this.setState({
          showContent: SHOW_CONTENT.incorrect,
          incorrect: incorrect + 1,
          remainder: remainder - 1,
        });
      } else {
        this.setState({
          word: '',
          answer: '',
          showContent: SHOW_CONTENT.incorrect,
          incorrect: incorrect + 1,
          remainder: remainder - 1,
        });
      }
    }
  }

  handleCopyAnswerChange = (input) => {
    const { study, answer, count } = this.state;
    const nextIndex = count + 1;

    this.setState({
      copyAnswer: input,
    });

    if (input.toLowerCase() === answer.toLowerCase()) {
      if (nextIndex !== study.length) {
        this.setState({
          showContent: SHOW_CONTENT.insertAnswer,
          word: study[nextIndex].translation,
          answer: study[nextIndex].word,
          tryAnswer: '',
          copyAnswer: '',
          count: nextIndex,
        });
      } else {
        this.setState({
          showContent: SHOW_CONTENT.insertAnswer,
          word: '',
          answer: '',
          tryAnswer: '',
          copyAnswer: '',
        });
      }
    }
  }

  showScreenInsertAnswer = () => (
    <View style={styles.containerCard}>
      <View style={styles.containerWord}>
        <Text style={styles.word}>{this.state.word}</Text>
        <TouchableOpacity
          onPress={() => this.handleDoNotKnowClick()}
        >
          <Text style={styles.doNotKnow}>Não sei</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerAnswer}>
        <TextInput
          style={styles.input}
          placeholder="INSIRA A RESPOSTA EM INGLÊS"
          placeholderTextColor="rgba(0, 0, 0, 0.2)"
          value={this.state.tryAnswer}
          onChangeText={this.handleTryAnswerChange}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleAnswerClick()}
        >
          <Text style={styles.textButton}>Responder</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  showScreenDoNotKnow = () => (
    <View style={styles.containerCard}>
      <Text style={styles.textCopyAnswer}>Copiar a resposta</Text>
      <Text style={styles.textQuestionAndAnswer}>PERGUNTA</Text>
      <View style={styles.containerWordDoNotKnow}>
        <Text>{this.state.word}</Text>
        <TouchableOpacity
          onPress={() => {
            Tts.stop();
            Tts.setDefaultLanguage('pt-BR');
            Tts.speak(this.state.word);
          }}
        >
          <IconAntDesign
            name="sound"
            size={20}
            color="black"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.textQuestionAndAnswer}>RESPOSTA</Text>
      <View style={styles.containerWordDoNotKnow}>
        <Text>{this.state.answer}</Text>
        <TouchableOpacity
          onPress={() => {
            Tts.stop();
            Tts.setDefaultLanguage('en-US');
            Tts.speak(this.state.answer);
          }}
        >
          <IconAntDesign
            name="sound"
            size={20}
            color="black"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerAnswerDoNotKnow}>
        <TextInput
          style={styles.input}
          placeholder="COPIAR A RESPOSTA"
          placeholderTextColor="rgba(0, 0, 0, 0.2)"
          value={this.state.copyAnswer}
          onChangeText={this.handleCopyAnswerChange}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  )

  showScreenCorrect = () => (
    <View style={styles.containerCard}>
      <Text style={styles.textCorrect}>Correta</Text>
      <Text style={styles.textQuestionAndAnswer}>PERGUNTA</Text>
      <View style={styles.containerWordDoNotKnow}>
        <Text>{this.state.word}</Text>
        <TouchableOpacity
          onPress={() => {
            Tts.stop();
            Tts.setDefaultLanguage('pt-BR');
            Tts.speak(this.state.word);
          }}
        >
          <IconAntDesign
            name="sound"
            size={20}
            color="black"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.textQuestionAndAnswer}>RESPOSTA</Text>
      <View style={styles.containerWordDoNotKnow}>
        <Text>{this.state.answer}</Text>
        <TouchableOpacity
          onPress={() => {
            Tts.stop();
            Tts.setDefaultLanguage('en-US');
            Tts.speak(this.state.answer);
          }}
        >
          <IconAntDesign
            name="sound"
            size={20}
            color="black"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerAnswer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const { study, count } = this.state;
            const nextIndex = count + 1;

            if (nextIndex !== study.length) {
              this.setState({
                showContent: SHOW_CONTENT.insertAnswer,
                count: nextIndex,
                word: study[nextIndex].translation,
                answer: study[nextIndex].word,
              });
            }
          }}
        >
          <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  showScreenIncorrect = () => (
    <View style={styles.containerCard}>
      <Text style={styles.textCopyAnswer}>Incorreta</Text>
      <Text style={styles.textQuestionAndAnswer}>PERGUNTA</Text>
      <View style={styles.containerWordDoNotKnow}>
        <Text>{this.state.word}</Text>
        <TouchableOpacity
          onPress={() => {
            Tts.stop();
            Tts.setDefaultLanguage('pt-BR');
            Tts.speak(this.state.word);
          }}
        >
          <IconAntDesign
            name="sound"
            size={20}
            color="black"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.textQuestionAndAnswer}>VOCÊ DISSE</Text>
      <View style={styles.containerWordDoNotKnow}>
        <Text style={styles.textTryAnswer}>{this.state.tryAnswer}</Text>
      </View>

      <Text style={styles.textQuestionAndAnswer}>RESPOSTA</Text>
      <View style={styles.containerWordDoNotKnow}>
        <Text style={styles.textAnswer}>{this.state.answer}</Text>
        <TouchableOpacity
          onPress={() => {
            Tts.stop();
            Tts.setDefaultLanguage('en-US');
            Tts.speak(this.state.answer);
          }}
        >
          <IconAntDesign
            name="sound"
            size={20}
            color="black"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerAnswer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const { study, count } = this.state;
            const nextIndex = count + 1;

            if (nextIndex !== study.length) {
              this.setState({
                showContent: SHOW_CONTENT.insertAnswer,
                count: nextIndex,
                tryAnswer: '',
                word: study[nextIndex].translation,
                answer: study[nextIndex].word,
              });
            }
          }}
        >
          <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  chooseContent = () => {
    const { showContent } = this.state;

    if (showContent === SHOW_CONTENT.insertAnswer) {
      return this.showScreenInsertAnswer();
    }

    if (showContent === SHOW_CONTENT.doNotKnow) {
      return this.showScreenDoNotKnow();
    }

    if (showContent === SHOW_CONTENT.correct) {
      return this.showScreenCorrect();
    }

    if (showContent === SHOW_CONTENT.incorrect) {
      return this.showScreenIncorrect();
    }

    return '';
  }

  render() {
    const { study } = this.state;

    const practiceName = this.props.navigation.getParam('practice', {});

    return (
      <Container style={styles.container}>
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
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.content}>
            <View style={styles.containerAllProgress}>
              <View style={styles.containerProgress}>
                <Progress.Bar
                  progress={study.length ? this.state.remainder / study.length : 1}
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
              <View style={styles.containerProgress}>
                <Progress.Bar
                  progress={study.length && this.state.incorrect / study.length}
                  color="#ff725b"
                  unfilledColor="#ffd4cd"
                  width={null}
                  // borderWidth={0}
                />
                <View style={styles.textProgress}>
                  <Text>INCORRETA</Text>
                  <Text>{this.state.incorrect}</Text>
                </View>
              </View>
              <View style={styles.containerProgress}>
                <Progress.Bar
                  progress={study.length && this.state.correct / study.length}
                  color="#23b26d"
                  unfilledColor="#bde8d3"
                  width={null}
                  // borderWidth={0}
                />
                <View style={styles.textProgress}>
                  <Text>CORRETA</Text>
                  <Text>{this.state.correct}</Text>
                </View>
              </View>
            </View>
            {this.chooseContent()}
          </View>
        </ScrollView>
      </Container>
    );
  }
}

TrainScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TrainScreen;
