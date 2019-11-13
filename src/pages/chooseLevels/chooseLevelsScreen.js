/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Text,
  Button,
  View,
} from 'native-base';
import IconEntypo from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import { getGame } from '../../services/gameApi';


class ChooseLevelsScreen extends Component {
  state = {
    currentLevel: 0,
  }

  componentDidUpdate() {
    if (this.props.tabChanged) {
      this.props.onChangeTab(false);
      this.fetchGame();
    }

    if (this.props.focusOnContentScreenToFetch) {
      this.props.onChangeFocusOnContentScreenToFetch(false);
      this.fetchGame();
    }
  }

  fetchGame = async () => {
    const { content } = this.props;

    const userAuthenticatedJson = await AsyncStorage.getItem('userAuthenticatedJson');
    const userAuthenticated = JSON.parse(userAuthenticatedJson);

    getGame(userAuthenticated.id, content.id, this.callbackSucessGetGame);
  }

  callbackSucessGetGame = async (game) => {
    await AsyncStorage.setItem('gameJson', JSON.stringify(game));
    this.setState({ currentLevel: game.levelId });
  }

  handleLevelPress = async (chosenLevel) => {
    await AsyncStorage.setItem('chosenLevelJson', JSON.stringify(chosenLevel));
    this.props.onLevelPress(chosenLevel);
  }

  render() {
    const { currentLevel } = this.state;

    return (
      <Container style={styles.container}>
        <Text style={styles.text}>Escolha um nível de dificuldade</Text>
        <View style={styles.content}>
          <View style={styles.containerButton}>
            <Button
              style={currentLevel > 0 && currentLevel <= 4
                ? styles.buttonUnlocked : styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled={!(currentLevel > 0 && currentLevel <= 4)}
              onPress={() => this.handleLevelPress({ id: 1, name: 'Iniciante' })}
            >
              {(currentLevel > 0 && currentLevel <= 4)
                ? (
                  <IconEntypo
                    name="check"
                    size={25}
                    color="white"
                  />
                )
                : (
                  <IconEntypo
                    name="lock"
                    size={25}
                    color="#989898"
                  />
                )}
              <Text style={currentLevel > 0 && currentLevel <= 4
                ? styles.buttonTextUnlocked : styles.buttonTextLocked}
              >
                Iniciante
              </Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={currentLevel > 1 && currentLevel <= 4
                ? styles.buttonUnlocked : styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled={!(currentLevel > 1 && currentLevel <= 4)}
              onPress={() => this.handleLevelPress({ id: 2, name: 'Básico' })}
            >
              {(currentLevel > 1 && currentLevel <= 4)
                ? (
                  <IconEntypo
                    name="check"
                    size={25}
                    color="white"
                  />
                )
                : (
                  <IconEntypo
                    name="lock"
                    size={25}
                    color="#989898"
                  />
                )}
              <Text style={currentLevel > 1 && currentLevel <= 4
                ? styles.buttonTextUnlocked : styles.buttonTextLocked}
              >
                Básico
              </Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={currentLevel > 2 && currentLevel <= 4
                ? styles.buttonUnlocked : styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled={!(currentLevel > 2 && currentLevel <= 4)}
              onPress={() => this.handleLevelPress({ id: 3, name: 'Intermediário' })}
            >
              {(currentLevel > 2 && currentLevel <= 4)
                ? (
                  <IconEntypo
                    name="check"
                    size={25}
                    color="white"
                  />
                )
                : (
                  <IconEntypo
                    name="lock"
                    size={25}
                    color="#989898"
                  />
                )}
              <Text style={currentLevel > 2 && currentLevel <= 4
                ? styles.buttonTextUnlocked : styles.buttonTextLocked}
              >
                Intermediário
              </Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={currentLevel === 4 ? styles.buttonUnlocked : styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled={!(currentLevel === 4)}
              onPress={() => this.handleLevelPress({ id: 4, name: 'Avançado' })}
            >
              {(currentLevel === 4)
                ? (
                  <IconEntypo
                    name="check"
                    size={25}
                    color="white"
                  />
                )
                : (
                  <IconEntypo
                    name="lock"
                    size={25}
                    color="#989898"
                  />
                )}
              <Text style={currentLevel === 4
                ? styles.buttonTextUnlocked : styles.buttonTextLocked}
              >
                Avançado
              </Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

ChooseLevelsScreen.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
  onLevelPress: PropTypes.func,
  tabChanged: PropTypes.bool,
  onChangeTab: PropTypes.func,
  focusOnContentScreenToFetch: PropTypes.bool,
  onChangeFocusOnContentScreenToFetch: PropTypes.func,
};

ChooseLevelsScreen.defaultProps = {
  content: {},
  onLevelPress: () => {},
  tabChanged: false,
  onChangeTab: () => {},
  focusOnContentScreenToFetch: false,
  onChangeFocusOnContentScreenToFetch: () => {},
};

export default ChooseLevelsScreen;
