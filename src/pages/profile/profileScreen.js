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

const ProfileScreen = (props) => (
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
        <Title>ProfileScreen</Title>
      </Body>
      <Right />
    </Header>
    <Content padder>
      <Card>
        <CardItem>
          <Body>
            <Text>Profile</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Container>
);

ProfileScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProfileScreen;
