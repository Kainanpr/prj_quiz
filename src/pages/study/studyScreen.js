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

import styles from './styles';

class StudyScreen extends Component {
  state = {
    study: [],
    pageNumber: 1,
    showInstruction: true,
  }

  componentDidMount() {
    const study = [
      {
        id: 1,
        word: 'Dent',
        translation: 'Mossa',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 2,
        word: 'Nicks',
        translation: 'Cortes',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 3,
        word: 'Scratches',
        translation: 'Arranhões',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 4,
        word: 'Cracks',
        translation: 'Rachaduras',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 5,
        word: 'Holes',
        translation: 'Perfurações',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 6,
        word: 'Abrasion',
        translation: 'Abrasão',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 7,
        word: 'Gouge',
        translation: 'Ranhura',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 8,
        word: 'Corrosion',
        translation: 'Corrosão',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 9,
        word: 'Delamination',
        translation: 'Delaminação',
        contentId: 2,
        levelId: 1,
      },
      {
        id: 10,
        word: 'Disbond',
        translation: 'Decolar',
        contentId: 2,
        levelId: 1,
      },
    ];

    this.setState({
      study,
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
