import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View, Image } from 'react-native';
import {
  Icon,
  Button,
  Text,
  Container,
  Body,
  Header,
  Title,
  Left,
  Right,
} from 'native-base';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import quizLogoImg from '../../assets/images/quiz_logo_simbolo.png';
import ifspLogoImg from '../../assets/images/ifsp_logo.png';
import backgroundImg from '../../assets/images/background-signin.jpg';
import styles from './styles';

const HomeScreen = (props) => (
  <ImageBackground source={backgroundImg} style={styles.imageBackgroundContainer}>
    <Container style={styles.container}>
      <Header androidStatusBarColor="#186078" style={styles.header}>
        <Left>
          <Button
            transparent
            onPress={() => props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Página inicial</Title>
        </Body>
        <Right />
      </Header>
      <View padder style={styles.content}>
        <View style={styles.containerLogoQuiz}>
          <Image
            style={styles.logoQuiz}
            source={quizLogoImg}
            resizeMode="contain"
          />
          <Button
            style={styles.button}
            iconLeft
            rounded
            block
            transparent
            onPress={() => props.navigation.navigate('ChooseTheme')}
          >
            <IconMaterialCommunity
              name="play"
              size={30}
              color="#ffffff"
            />
            <Text style={styles.buttonText}>JOGAR</Text>
          </Button>
        </View>
        <View style={styles.containerLogoIfsp}>
          <Image
            style={styles.logoIfsp}
            source={ifspLogoImg}
            resizeMode="contain"
          />
        </View>
      </View>
    </Container>
  </ImageBackground>
);

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HomeScreen;
