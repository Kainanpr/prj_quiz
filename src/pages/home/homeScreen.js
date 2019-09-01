import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
} from 'native-base';

import styles from './styles';

const HomeScreen = (props) => (
  <Container>
    <Header androidStatusBarColor="rgba(24,96,120,1)" style={styles.header}>
      <Left>
        <Button
          transparent
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>HomeScreen</Title>
      </Body>
      <Right />
    </Header>
    <Content padder>
      <Card>
        <CardItem>
          <Body>
            <Text>Welcome!</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Container>
);

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HomeScreen;
