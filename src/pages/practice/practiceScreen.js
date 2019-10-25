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

import practiceImg from '../../assets/images/icon-practice-screen.png';
import styles from './styles';

class ChooseThemeScreen extends Component {
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
              onPress={() => this.props.navigation.navigate('Study', { practice: 'Estude' })}
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
              onPress={() => this.props.navigation.navigate('Train', { practice: 'Treine' })}
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
              onPress={() => this.props.navigation.navigate('Test', { practice: 'Teste' })}
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
