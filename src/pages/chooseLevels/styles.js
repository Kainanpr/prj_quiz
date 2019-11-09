import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dce2f2',
  },
  content: {
    backgroundColor: '#dce2f2',
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: '#989898',
    textAlign: 'center',
    paddingVertical: 30,
    letterSpacing: -1,
  },
  containerButton: {
    flex: 1,
  },
  buttonLocked: {
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  buttonUnlocked: {
    height: '100%',
    backgroundColor: '#a1bf67',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  buttonTextLocked: {
    fontSize: 25,
    color: '#989898',
  },
  buttonTextUnlocked: {
    fontSize: 25,
    color: 'white',
  },
});

export default styles;
