import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: '#dce2f2',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 60,
  },
  containerLogo: {
    alignItems: 'center',
  },
  logo: {
    height: 300,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Sans Serif',
    fontSize: 25,
    color: '#989898',
    letterSpacing: -2,
    textAlign: 'center',
  },
  containerBotton: {
    marginTop: 30,
  },
  button: {
    backgroundColor: '#186078',
    marginBottom: 30,
    padding: 55,
  },
  buttonText: {
    letterSpacing: -1,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
