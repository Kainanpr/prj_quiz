import { Platform } from 'react-native';

export default {
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginLeft: 20,
  },
  icon: {
    color: '#777',
    fontSize: 26,
    width: 30,
  },
};
