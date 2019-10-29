/* eslint-disable max-len */
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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
import CardFlip from 'react-native-card-flip';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationEvents } from 'react-navigation';

import styles from './styles';

class StudyScreen extends Component {
  state = {
    study: [],
    pageNumber: 1,
    showInstruction: true,
  }

  setStudy() {
    const study = this.props.navigation.getParam('study', {});
    this.setState({
      study,
      pageNumber: 1,
      showInstruction: true,
    });
  }

  previousCard = () => {
    const { pageNumber } = this.state;

    if (pageNumber > 1) {
      this.setState({ pageNumber: pageNumber - 1 });
    }
  }

  nextCard = () => {
    const { pageNumber, study } = this.state;

    if (pageNumber < study.length) {
      this.setState({ pageNumber: pageNumber + 1 });
    }
  }

  flipCard = () => {
    const { showInstruction } = this.state;

    if (showInstruction) {
      this.setState({ showInstruction: false });
    }

    this.card.flip();
  }

  labelFront = () => {
    const { study, pageNumber } = this.state;

    if (!this.card) {
      return '';
    }

    if (this.card.state.side === 0) {
      return study.length !== 0 && study[pageNumber - 1].word;
    }

    return study.length !== 0 && study[pageNumber - 1].translation;
  }

  labelBehind = () => {
    const { study, pageNumber } = this.state;

    if (!this.card) {
      return '';
    }

    if (this.card.state.side === 0) {
      return study.length !== 0 && study[pageNumber - 1].translation;
    }

    return study.length !== 0 && study[pageNumber - 1].word;
  }

  render() {
    const { study } = this.state;

    const practiceName = this.props.navigation.getParam('practice', {});
    const pageTotal = study.length;

    return (
      <Container style={styles.container}>
        <NavigationEvents onWillFocus={() => { this.setStudy(); }} />
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
          <CardFlip flipDirection="x" style={styles.cardContainer} ref={(card) => { this.card = card; }}>
            <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.flipCard()}>
              <Text style={styles.label}>{this.labelFront()}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.flipCard()}>
              <Text style={styles.label}>{this.labelBehind()}</Text>
            </TouchableOpacity>
          </CardFlip>
          {this.state.showInstruction
          && (
            <View style={styles.containerInstruction}>
              <Text style={styles.textInstruction}> Clique no cartão para ver o termo</Text>
              <IconFontAwesome5 name="hand-point-up" size={20} color="#ffc83d" />
            </View>
          )}
          <View style={styles.pagination}>
            <Button
              style={styles.paginationButton}
              transparent
              onPress={() => this.previousCard()}
            >
              <IconFontAwesome
                name="arrow-left"
                size={25}
                color="#989898"
              />
            </Button>
            <Text style={styles.paginationText}>{this.state.pageNumber}/{pageTotal}</Text>
            <Button
              style={styles.paginationButton}
              transparent
              onPress={() => this.nextCard()}
            >
              <IconFontAwesome
                name="arrow-right"
                size={25}
                color="#989898"
              />
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

StudyScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StudyScreen;
