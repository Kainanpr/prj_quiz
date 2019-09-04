import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#186078',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
  },
  containerButton: {
    flex: 2,
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#186078',
    marginBottom: 30,
    padding: 40,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default styles;
