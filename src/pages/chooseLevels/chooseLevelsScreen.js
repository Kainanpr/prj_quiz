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

import styles from './styles';

class ChooseLevelsScreen extends Component {
  render() {
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
              style={styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled
            >
              <IconEntypo
                name="lock"
                size={25}
                color="#989898"
              />
              <Text style={styles.buttonTextLocked}>Básico</Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled
            >
              <IconEntypo
                name="lock"
                size={25}
                color="#989898"
              />
              <Text style={styles.buttonTextLocked}>Intermediário</Text>
            </Button>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={styles.buttonLocked}
              iconLeft
              rounded
              block
              disabled
            >
              <IconEntypo
                name="lock"
                size={25}
                color="#989898"
              />
              <Text style={styles.buttonTextLocked}>Avançado</Text>
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
