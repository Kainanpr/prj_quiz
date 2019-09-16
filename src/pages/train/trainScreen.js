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

import styles from './styles';

class TrainScreen extends Component {
  state = {
    study: [],
    remainder: undefined,
    incorrect: 0,
    correct: 0,
    showAnswer: false,
    tryAnswer: '',
    copyAnswer: '',
    word: '',
    answer: '',
    count: 0,
  }

  componentDidMount() {
    const { count } = this.state;

    const study = [
      {
        id: 1,
        word: 'Dent',
        translation: 'Mossa',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 2,
        word: 'Nicks',
        translation: 'Cortes',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 3,
        word: 'Scratches',
        translation: 'Arranhões',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 4,
        word: 'Cracks',
        translation: 'Rachaduras',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 5,
        word: 'Holes',
        translation: 'Perfurações',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 6,
        word: 'Abrasion',
        translation: 'Abrasão',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 7,
        word: 'Gouge',
        translation: 'Ranhura',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 8,
        word: 'Corrosion',
        translation: 'Corrosão',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 9,
        word: 'Delamination',
        translation: 'Delaminação',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 10,
        word: 'Disbond',
        translation: 'Decolar',
        contentId: 2,
        levelId: 1,
      },
    ];

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
      showAnswer: true,
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
    const { study, answer, count, tryAnswer, correct, remainder } = this.state;
    const nextIndex = count + 1;

    if (tryAnswer.toLowerCase() === answer.toLowerCase()) {
      if (nextIndex !== study.length) {
        this.setState({
          word: study[nextIndex].translation,
          answer: study[nextIndex].word,
          tryAnswer: '',
          count: nextIndex,
          correct: correct + 1,
          remainder: remainder - 1,
        });
      } else {
        this.setState({
          word: '',
          answer: '',
          tryAnswer: '',
          correct: correct + 1,
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
          showAnswer: false,
          word: study[nextIndex].translation,
          answer: study[nextIndex].word,
          copyAnswer: '',
          count: nextIndex,
        });
      } else {
        this.setState({
          showAnswer: false,
          word: '',
          answer: '',
          copyAnswer: '',
        });
      }
    }
  }

  render() {
    const { study, word, answer } = this.state;

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

            {!this.state.showAnswer ? (
              <View style={styles.containerCard}>
                <View style={styles.containerWord}>
                  <Text style={styles.word}>{word}</Text>
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
              : (
                <View style={styles.containerCard}>
                  <Text style={styles.textCopyAnswer}>Copiar a resposta</Text>
                  <Text style={styles.textQuestionAndAnswer}>PERGUNTA</Text>
                  <View style={styles.containerWordDoNotKnow}>
                    <Text>{word}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        Tts.stop();
                        Tts.setDefaultLanguage('pt-BR');
                        Tts.speak(word);
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
                    <Text>{answer}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        Tts.stop();
                        Tts.setDefaultLanguage('en-US');
                        Tts.speak(answer);
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
              )}
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
