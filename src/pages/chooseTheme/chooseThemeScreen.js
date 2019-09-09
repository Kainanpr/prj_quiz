import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import {
  Icon,
  Button,
  Container,
  Body,
  Header,
  Title,
  View,
  Text,
  Left,
  Right,
} from 'native-base';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import quizLearningImg from '../../assets/images/learning.png';
import styles from './styles';

class ChooseThemeScreen extends Component {
  state = {
    themes: [],
  }

  componentDidMount() {
    const themes = [{
      id: 1,
      name: 'Vocabulário',
      contents: [
        { id: 1, name: 'Partes da Aeronave' },
        { id: 2, name: 'Danos' },
        { id: 3, name: 'Características Técnicas' },
      ],
    }, {
      id: 2,
      name: 'Gramática',
      contents: [
        { id: 1, name: 'Modais' },
        { id: 2, name: 'Presente Simples' },
        { id: 3, name: 'Elementos de Referência' },
      ],
    }];

    this.setState({ themes });
  }

  handleContentPress = (item) => {
    this.props.navigation.navigate('Practice', { content: item });
  }

  render() {
    const { themes } = this.state;

    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor="#186078" style={styles.header} hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Temas</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.containerLogo}>
              <Image
                style={styles.logo}
                source={quizLearningImg}
                resizeMode="contain"
              />
              <Text style={styles.text}>O que você quer aprender hoje?</Text>
            </View>
            <View style={styles.containerBotton}>
              <Button
                style={styles.button}
                iconLeft
                rounded
                block
                onPress={() => this.props.navigation.navigate('ChooseContent', { theme: themes[0] })}
              >
                <IconMaterialCommunity
                  name="airplane"
                  size={25}
                  color="white"
                />
                <Text style={styles.buttonText}>Vocabulário</Text>
              </Button>
              <Button
                style={styles.button}
                iconLeft
                rounded
                block
                onPress={() => this.props.navigation.navigate('ChooseContent', { theme: themes[1] })}
              >
                <IconMaterialCommunity
                  name="book-open-variant"
                  size={25}
                  color="white"
                />
                <Text style={styles.buttonText}>Gramática</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

ChooseThemeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChooseThemeScreen;
