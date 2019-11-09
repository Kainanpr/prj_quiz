import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dce2f2',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#186078',
  },
  containerLogo: {
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Sans Serif',
    fontSize: 25,
    color: '#989898',
    letterSpacing: -2,
    textAlign: 'center',
    marginBottom: 30,
  },
  containerButton: {
    flex: 1,
  },
  button: {
    backgroundColor: '#186078',
    height: '100%',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});

export default styles;
