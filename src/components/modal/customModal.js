import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Modal,
} from 'react-native';
import { Button } from 'native-base';
import styles from './styles';

class CustomModal extends PureComponent {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.visible}
        onRequestClose={this.props.onButtonPress}
      >
        <View style={styles.containerModal}>
          <View style={styles.contentModal}>
            <Text style={this.props.hasError ? styles.textError : styles.textSuccess}>
              {this.props.text}
            </Text>
            <Button
              style={styles.button}
              light
              onPress={this.props.onButtonPress}
            >
              <Text style={styles.textButton}>Continuar</Text>
            </Button>
          </View>
        </View>
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  visible: PropTypes.bool,
  onButtonPress: PropTypes.func,
  text: PropTypes.string,
  hasError: PropTypes.bool,
};

CustomModal.defaultProps = {
  visible: false,
  onButtonPress: () => {},
  text: '',
  hasError: false,
};

export default CustomModal;
