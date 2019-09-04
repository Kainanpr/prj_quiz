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
        <ScrollView contentContainerStyle={styles.scroll}>
          {contents.map((item) => (
            <TouchableOpacity
              key={item.id.toString()}
              activeOpacity={0.6}
              onPress={() => this.props.onContentPress(item)}
            >
              <View style={styles.containerCard}>
                <Text style={styles.buttonText}>{item.name}</Text>
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
  onContentPress: PropTypes.func,
};

ChooseContentScreen.defaultProps = {
  contents: [],
  onContentPress: () => {},
};

export default ChooseContentScreen;
