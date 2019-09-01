import { Platform } from 'react-native';

export default {
  content: {
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  containerLogo: {
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 70,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginLeft: 5,
    color: 'white',
    borderBottomWidth: 0.2,
    width: '100%',
    paddingBottom: 10,
    borderColor: 'white',
  },
  icon: {
    color: 'white',
    fontSize: 26,
    width: 30,
  },
};
