import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import {
  Icon,
  Button,
  Text,
  Container,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right,
} from 'native-base';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import backgroundImg from '../../assets/images/background-signin.jpg';
import styles from './styles';

const ThemeScreen = (props) => (
  <ImageBackground source={backgroundImg} style={styles.imageBackgroundContainer}>
    <Container style={styles.container}>
      <Header androidStatusBarColor="#218b8f" style={styles.header}>
        <Left>
          <Button
            transparent
            onPress={() => props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Temas</Title>
        </Body>
        <Right />
      </Header>
      <Content padder style={styles.content}>
        <Text style={styles.text}>O que você quer aprender hoje?</Text>
        <Button style={styles.button} iconLeft rounded block>
          <IconMaterialCommunity
            name="airplane"
            size={20}
            color="#ffffff"
          />
          <Text style={styles.buttonText}>Vocabulário</Text>
        </Button>
        <Button style={styles.button} iconLeft rounded block>
          <IconMaterialCommunity
            name="book-open-variant"
            size={20}
            color="#ffffff"
          />
          <Text style={styles.buttonText}>Gramática</Text>
        </Button>
      </Content>
    </Container>
  </ImageBackground>
);

ThemeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ThemeScreen;
