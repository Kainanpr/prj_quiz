import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  header: {
    backgroundColor: '#186078',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  containerLogoQuiz: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoQuiz: {
    height: 200,
    resizeMode: 'contain',
  },
  containerButton: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 30,
    padding: 30,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
  containerLogoIfsp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoIfsp: {
    height: 100,
    resizeMode: 'contain',
  },
});

export default styles;
