import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Tabs,
  Tab,
  ScrollableTab,
} from 'native-base';
import { NavigationEvents } from 'react-navigation';

import CustomHeader from '../../components/header/customHeader';
import themeColors from '../../constants/themeColors';

import ChooseLevelsScreen from '../chooseLevels/chooseLevelsScreen';
import styles from './styles';


class ChooseContentScreen extends Component {
  state = {
    tabChanged: false,
    focusOnContentScreenToFetch: false,
  }

  handleTabChange = (tabChanged) => {
    this.setState({ tabChanged });
  }

  handleFocusOnContentScreenToFetchChange = (focusOnContentScreenToFetch) => {
    this.setState({ focusOnContentScreenToFetch });
  }

  handleLevelPress = (chosenLevel) => {
    this.props.navigation.navigate('Practice', { chosenLevel });
  }

  render() {
    const theme = this.props.navigation.getParam('theme', {});

    return (
      <Container style={styles.container}>
        <NavigationEvents
          onDidFocus={() => { this.handleFocusOnContentScreenToFetchChange(true); }}
        />
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
                focusOnContentScreenToFetch={this.state.focusOnContentScreenToFetch}
                onChangeFocusOnContentScreenToFetch={this.handleFocusOnContentScreenToFetchChange}
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
