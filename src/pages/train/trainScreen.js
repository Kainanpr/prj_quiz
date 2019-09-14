import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native';
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
} from 'native-base';

import * as Progress from 'react-native-progress';

import styles from './styles';

class TrainScreen extends Component {
  state = {
    remainder: '',
    incorrect: '',
    correct: '',
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
            <View style={styles.containerAllProgress}>
              <View style={styles.containerProgress}>
                <Progress.Bar
                  progress={0.9}
                  color="#4257b2"
                  unfilledColor="#c6cce8"
                  width={null}
                  // borderWidth={0}
                />
                <View style={styles.textProgress}>
                  <Text>RESTANTES</Text>
                  <Text>{2}</Text>
                </View>
              </View>
              <View style={styles.containerProgress}>
                <Progress.Bar
                  progress={0.5}
                  color="#ff725b"
                  unfilledColor="#ffd4cd"
                  width={null}
                  // borderWidth={0}
                />
                <View style={styles.textProgress}>
                  <Text>INCORRETA</Text>
                  <Text>{7}</Text>
                </View>
              </View>
              <View style={styles.containerProgress}>
                <Progress.Bar
                  progress={0.1}
                  color="#23b26d"
                  unfilledColor="#bde8d3"
                  width={null}
                  // borderWidth={0}
                />
                <View style={styles.textProgress}>
                  <Text>CORRETA</Text>
                  <Text>{1}</Text>
                </View>
              </View>
            </View>

            <View style={styles.containerCard}>
              <View style={styles.containerWord}>
                <Text style={styles.word}>CORTES</Text>
                <TouchableOpacity>
                  <Text style={styles.doNotKnow}>Não sei</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.containerAnswer}>
                <TextInput
                  style={styles.input}
                  value={this.state.name}
                  onChangeText={this.handleNameChange}
                  underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>Responder</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.textInstruction}>INSIRA A RESPOSTA EM INGLÊS</Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

TrainScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TrainScreen;
