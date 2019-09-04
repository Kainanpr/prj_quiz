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
    console.log(item);
    this.props.navigation.navigate('Practice', item);
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
          {themes.map((item) => (
            <Tab key={item.id.toString()} activeTabStyle={{ backgroundColor: '#186078' }} tabStyle={{ backgroundColor: '#186078' }} heading={item.name}>
              <ChooseContentScreen
                contents={item.contents}
                onContentPress={this.handleContentPress}
              />
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
