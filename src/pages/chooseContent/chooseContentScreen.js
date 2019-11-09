import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Tabs,
  Tab,
  ScrollableTab,
} from 'native-base';

import CustomHeader from '../../components/header/customHeader';
import themeColors from '../../constants/themeColors';

import ChooseLevelsScreen from '../chooseLevels/chooseLevelsScreen';
import styles from './styles';


class ChooseContentScreen extends Component {
  state = {
    tabChanged: false,
  }

  handleTabChange = (tabChanged) => {
    this.setState({ tabChanged });
  }

  handleLevelPress = (chosenLevel, onReturnedToLevelPage) => {
    this.props.navigation.navigate('Practice', { chosenLevel, onReturnedToLevelPage });
  }

  render() {
    const theme = this.props.navigation.getParam('theme', {});

    return (
      <Container style={styles.container}>
        <CustomHeader
          onButtonPress={() => this.props.navigation.goBack()}
          titleName={theme.name}
          hasTabs
        />
        <Tabs
          onChangeTab={() => { this.handleTabChange(true); }}
          renderTabBar={() => (
            <ScrollableTab
              style={{ backgroundColor: themeColors.headerAuthenticated.backgroundColor }}
            />
          )}
        >
          {theme.contents.map((item) => (
            <Tab
              key={item.id.toString()}
              activeTabStyle={{ backgroundColor: themeColors.headerAuthenticated.backgroundColor }}
              tabStyle={{ backgroundColor: themeColors.headerAuthenticated.backgroundColor }}
              heading={item.name}
            >
              <ChooseLevelsScreen
                tabChanged={this.state.tabChanged}
                onChangeTab={this.handleTabChange}
                content={item}
                onLevelPress={this.handleLevelPress}
              />
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
