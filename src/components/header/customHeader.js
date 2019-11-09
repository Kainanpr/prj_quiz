
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Button,
  Body,
  Header,
  Title,
  Left,
  Right,
} from 'native-base';
import styles from './styles';
import themeColors from '../../constants/themeColors';

class CustomHeader extends PureComponent {
  render() {
    return (
      <Header
        androidStatusBarColor={themeColors.headerAuthenticated.androidStatusBarColor}
        style={styles.header}
        hasTabs={this.props.hasTabs}
      >
        <Left>
          <Button transparent onPress={this.props.onButtonPress}>
            <Icon name={this.props.iconName} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.titleName}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

CustomHeader.propTypes = {
  onButtonPress: PropTypes.func,
  titleName: PropTypes.string,
  iconName: PropTypes.string,
  hasTabs: PropTypes.bool,
};

CustomHeader.defaultProps = {
  onButtonPress: {},
  titleName: '',
  iconName: 'arrow-back',
  hasTabs: false,
};

export default CustomHeader;
