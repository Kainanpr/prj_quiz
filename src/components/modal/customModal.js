import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import styles from './styles';

class CustomModal extends PureComponent {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.containerModal}>
          <View style={styles.contentModal}>
            <Text style={this.props.hasError ? styles.textError : styles.textSuccess}>
              {this.props.text}
            </Text>
            <TouchableOpacity onPress={this.props.onButtonPress}>
              <Text>Continuar</Text>
            </TouchableOpacity>
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
