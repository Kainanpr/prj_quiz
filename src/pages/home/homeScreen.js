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

const HomeScreen = (props) => (
  <Container>
    <Header>
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
            <Text>Welcome {props.navigation.getParam('username')}</Text>
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
