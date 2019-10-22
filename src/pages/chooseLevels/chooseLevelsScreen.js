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

class ChooseLevelsScreen extends Component {
  state = {
    level: 1,
  }

  componentDidMount() {
    this.getUserToken();
  }

  getUserToken = async () => {
    const userTokenJson = await AsyncStorage.getItem('userToken');
    const userToken = JSON.parse(userTokenJson);

    this.setState({ level: userToken.level.id });
  }

  render() {
    const { level } = this.state;

    return (
      <Container style={styles.container}>
        <Text style={styles.text}>Escolha um nível de dificuldade</Text>
        <View style={styles.content}>
          <View style={styles.containerButton}>
            <Button
              style={styles.buttonUnlocked}
              iconLeft
              rounded
              block
              onPress={() => this.props.onLevelPress('Iniciante')}
            >
              <IconEntypo
                name="check"
                size={25}
                color="white"
              />
              <Text style={styles.buttonTextUnlocked}>Iniciante</Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={level > 1 && level <= 4 ? styles.buttonUnlocked : styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled={!(level > 1 && level <= 4)}
            >
              {(level > 1 && level <= 4)
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
              <Text style={level > 1 && level <= 4
                ? styles.buttonTextUnlocked : styles.buttonTextLocked}
              >
                Básico
              </Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={level > 2 && level <= 4 ? styles.buttonUnlocked : styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled={!(level > 2 && level <= 4)}
            >
              {(level > 2 && level <= 4)
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
              <Text style={level > 2 && level <= 4
                ? styles.buttonTextUnlocked : styles.buttonTextLocked}
              >
                Intermediário
              </Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={level === 4 ? styles.buttonUnlocked : styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled={!(level === 4)}
            >
              {(level === 4)
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
              <Text style={level === 4
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
  onLevelPress: PropTypes.func,
};

ChooseLevelsScreen.defaultProps = {
  onLevelPress: () => {},
};

export default ChooseLevelsScreen;
