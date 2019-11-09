import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  View,
  Text,
} from 'native-base';
import CustomHeader from '../../components/header/customHeader';
import CustomModal from '../../components/modal/customModal';

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
    getThemes(this.callbackSucessGetThemes);
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

  render() {
    const { themes } = this.state;

    return (
      <Container style={styles.container}>
        <CustomHeader
          onButtonPress={() => this.props.navigation.goBack()}
          titleName="Temas"
          hasTabs
        />
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

        <CustomModal
          visible={this.state.modalVisible}
          onButtonPress={() => {
            this.setModalVisible(false);
          }}
          text="Não possui conteúdo cadastrado!"
          hasError
        />

      </Container>
    );
  }
}

ChooseThemeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChooseThemeScreen;
