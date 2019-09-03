/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ScrollView } from 'react-native';
import {
  Container, View,
  Text,
} from 'native-base';

import styles from './styles';

class ChooseContentScreen extends Component {
  render() {
    const { contents } = this.props;

    return (
      <Container style={styles.container}>
        <ScrollView>
          {contents.map((item, index) => (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={0.6}
            >
              <View style={styles.containerCard}>
                <Text style={styles.buttonText}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Container>
    );
  }
}

ChooseContentScreen.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.any),
};

ChooseContentScreen.defaultProps = {
  contents: [],
};

export default ChooseContentScreen;
