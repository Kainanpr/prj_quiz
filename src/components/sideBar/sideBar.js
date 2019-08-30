import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const datas = [
  {
    name: 'Home',
    route: 'Home',
    icon: 'phone-portrait',
    bg: '#C5F442',
  },
  {
    name: 'Profile',
    route: 'Profile',
    icon: 'arrow-up',
    bg: '#477EEA',
  },
];

class SideBar extends Component {
  handleSignOutPress = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('SignInStack');
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
        >
          <List>
            {datas.map((item) => (
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(item.route)}
              >
                <Left>
                  <Icon
                    active
                    name={item.icon}
                    style={styles.icon}
                  />
                  <Text style={styles.text}>
                    {item.name}
                  </Text>
                </Left>
              </ListItem>
            ))}
            <ListItem
              button
              noBorder
              onPress={() => this.handleSignOutPress()}
            >
              <Left>
                <Icon
                  active
                  name="exit"
                  style={styles.icon}
                />
                <Text style={styles.text}>
                  Sair
                </Text>
              </Left>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SideBar;

SideBar.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
