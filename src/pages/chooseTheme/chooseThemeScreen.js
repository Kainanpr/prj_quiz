import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Button,
  Container,
  Body,
  Tabs,
  Tab,
  ScrollableTab,
  Header,
  Title,
  Left,
  Right,
} from 'native-base';

import styles from './styles';
import ChooseContentScreen from '../chooseContent/chooseContentScreen';


class ChooseThemeScreen extends Component {
  state = {
    themes: [],
  }

  componentDidMount() {
    const themes = [{
      name: 'Vocabulário',
      contents: ['Partes da Aeronave', 'Danos', 'Características Técnicas'],
    }, {
      name: 'Gramática',
      contents: ['Modais', 'Presente Simples', 'Elementos de Referência'],
    }];

    this.setState({ themes });
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
        <Tabs renderTabBar={() => <ScrollableTab style={{ backgroundColor: '#186078' }} />}>
          {themes.map((item, index) => (
            <Tab key={index.toString()} activeTabStyle={{ backgroundColor: '#186078' }} tabStyle={{ backgroundColor: '#186078' }} heading={item.name}>
              <ChooseContentScreen contents={item.contents} />
            </Tab>
          ))}
        </Tabs>
      </Container>
    );
  }
}

ChooseThemeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChooseThemeScreen;
