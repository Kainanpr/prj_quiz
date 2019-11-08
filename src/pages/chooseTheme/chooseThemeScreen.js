import React, { Component } from 'react';
import { Image, ScrollView, Modal, Alert, TouchableOpacity } from 'react-native';
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

import AsyncStorage from '@react-native-community/async-storage';

import quizLearningImg from '../../assets/images/learning.png';
import styles from './styles';

import { getThemes } from '../../services/themeApi';

class ChooseThemeScreen extends Component {
  state = {
    themes: [],
    loading: true,
    modalVisible: false,
  }

  componentDidMount() {
    this.fetchThemes();
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  fetchThemes = async () => {
    const token = await AsyncStorage.getItem('token');
    getThemes(token, this.callbackSucessGetThemes);
  }

  callbackSucessGetThemes = (themes) => {
    this.setState({ themes, loading: false });
  }

  handleThemePress = (theme) => {
    if (!this.state.loading) {
      if (theme.contents.length !== 0) {
        this.props.navigation.navigate('ChooseContent', { theme });
      } else {
        this.setModalVisible(true);
      }
    }
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
              {
                themes.map((theme) => (
                  <Button
                    key={theme.id}
                    style={styles.button}
                    iconLeft
                    rounded
                    block
                    onPress={() => this.handleThemePress(theme)}
                  >
                    <Text style={styles.buttonText}>{theme.name}</Text>
                  </Button>
                ))
              }
            </View>
          </View>
        </ScrollView>

        {this.showModal()}

      </Container>
    );
  }
}

ChooseThemeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChooseThemeScreen;
