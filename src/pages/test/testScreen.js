import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ScrollView } from 'react-native';
import {
  Icon,
  Button,
  Container,
  Body,
  Header,
  Title,
  Left,
  Text,
  Right,
  View,
  Radio,
} from 'native-base';

import styles from './styles';

class TestScreen extends Component {
  state = {
    selectedOption: 1,
  }

  toggleRadio = (option) => {
    this.setState({ selectedOption: option });
  }

  render() {
    const practiceName = this.props.navigation.getParam('practice', {});

    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor="#186078" style={styles.header}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 4 }}>
            <Title>{practiceName}</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.containerQuestion}>
              <Text style={styles.textQuestion}>Question 1:</Text>
              <Text>"Is it still raining there?" Yes, it _______ here __________ ten days.</Text>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.toggleRadio(1)}
            >
              <View
                style={styles.containerOption}
              >
                <Radio
                  selected={this.state.selectedOption === 1}
                  onPress={() => this.toggleRadio(1)}
                />
                <Text style={styles.textOption}>is raining / since</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.toggleRadio(2)}
            >
              <View
                style={styles.containerOption}
              >
                <Radio
                  selected={this.state.selectedOption === 2}
                  onPress={() => this.toggleRadio(2)}
                />
                <Text style={styles.textOption}>has been rained / since</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.toggleRadio(3)}
            >
              <View
                style={styles.containerOption}
              >
                <Radio
                  selected={this.state.selectedOption === 3}
                  onPress={() => this.toggleRadio(3)}
                />
                <Text style={styles.textOption}>has being raining / for</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.toggleRadio(4)}
            >
              <View
                style={styles.containerOption}
              >
                <Radio
                  selected={this.state.selectedOption === 4}
                  onPress={() => this.toggleRadio(4)}
                />
                <Text style={styles.textOption}>has been raining / for</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.toggleRadio(5)}
            >
              <View
                style={styles.containerOption}
              >
                <Radio
                  selected={this.state.selectedOption === 5}
                  onPress={() => this.toggleRadio(5)}
                />
                <Text style={styles.textOption}>has raining / for</Text>
              </View>
            </TouchableOpacity>

            <Button rounded block style={{ marginVertical: 20, backgroundColor: '#186078' }}>
              <Text>Responder</Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

TestScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TestScreen;
