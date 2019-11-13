import React, { Component } from 'react';
import NetInfo from '@react-native-community/netinfo';
import CustomModal from './components/modal/customModal';

import Routes from './routes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
    };

    setTimeout(() => {
      NetInfo.isConnected.addEventListener('connectionChange', (res) => {
        if (res === false) {
          this.setState({ modalVisible: true });
        }
      });
    }, 2000);
  }

  setModalVisible = (modalVisible) => {
    this.setState({ modalVisible });
  }

  render() {
    return (
      <>
        <Routes />
        <CustomModal
          visible={this.state.modalVisible}
          onButtonPress={() => {
            this.setModalVisible(false);
          }}
          text="Sem conexão com a Internet!"
          hasError
        />
      </>
    );
  }
}

export default App;
