import React from 'react';
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

const SideBar = (props) => (
  <Container>
    <Content
      bounces={false}
    >
      <List
        dataArray={datas}
        keyExtractor={(item, index) => index.toString()}
        renderRow={(data) => (
          <ListItem
            button
            noBorder
            onPress={() => props.navigation.navigate(data.route)}
          >
            <Left>
              <Icon
                active
                name={data.icon}
                style={{ color: '#777', fontSize: 26, width: 30 }}
              />
              <Text style={styles.text}>
                {data.name}
              </Text>
            </Left>
          </ListItem>
        )}
      />
    </Content>
  </Container>
);

export default SideBar;

SideBar.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
