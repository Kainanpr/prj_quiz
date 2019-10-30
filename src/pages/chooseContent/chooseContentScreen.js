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

import ChooseLevelsScreen from '../chooseLevels/chooseLevelsScreen';
import styles from './styles';


class ChooseContentScreen extends Component {
  handleLevelPress = (chosenLevel, onReturnedToLevelPage) => {
    this.props.navigation.navigate('Practice', { chosenLevel, onReturnedToLevelPage });
  }

  render() {
    const theme = this.props.navigation.getParam('theme', {});

    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor="#186078" style={styles.header} hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{theme.name}</Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab style={{ backgroundColor: '#186078' }} />}>
          {theme.contents.map((item) => (
            <Tab key={item.id.toString()} activeTabStyle={{ backgroundColor: '#186078' }} tabStyle={{ backgroundColor: '#186078' }} heading={item.name}>
              <ChooseLevelsScreen content={item} onLevelPress={this.handleLevelPress} />
            </Tab>
          ))}
        </Tabs>
      </Container>
    );
  }
}

ChooseContentScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChooseContentScreen;
