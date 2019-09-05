import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import StepIndicator from 'react-native-step-indicator';

import styles from './styles';

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#186078',
  separatorUnFinishedColor: '#90bccb',
  stepStrokeCurrentColor: '#186078',
  stepIndicatorFinishedColor: '#186078',
  stepIndicatorUnFinishedColor: '#90bccb',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#186078',
};

class StudyScreen extends Component {
  state = {
    currentPage: 0,
  }

  renderLabel = ({ position, label, currentPosition }) => (
    <Text
      style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
    >
      {label}
    </Text>
  )

  onStepPress = (position) => {
    this.setState({ currentPage: position });
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
        <View style={styles.content}>
          <View style={styles.stepIndicator}>
            <StepIndicator
              customStyles={firstIndicatorStyles}
              currentPosition={this.state.currentPage}
              stepCount={4}
              labels={['Iniciante', 'Básico', 'Intermediário', 'Avançado']}
              renderLabel={this.renderLabel}
              onPress={this.onStepPress}
            />
          </View>
          {this.state.currentPage === 0 && (
            <View style={styles.containerPage}>
              <Text>Page 1</Text>
            </View>
          )}

          {this.state.currentPage === 1 && (
            <View style={styles.containerPage}>
              <Text>Page 2</Text>
            </View>
          )}

          {this.state.currentPage === 2 && (
            <View style={styles.containerPage}>
              <Text>Page 3</Text>
            </View>
          )}

          {this.state.currentPage === 3 && (
            <View style={styles.containerPage}>
              <Text>Page 4</Text>
            </View>
          )}
        </View>
      </Container>
    );
  }
}

StudyScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StudyScreen;
