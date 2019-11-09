import { Platform } from 'react-native';
import themeColors from '../../constants/themeColors';

export default {
  content: {
    backgroundColor: themeColors.sideBar.backgroundColor,
  },
  containerLogo: {
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
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
