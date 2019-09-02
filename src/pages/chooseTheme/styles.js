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
    backgroundColor: 'rgba(24,96,120,1)',
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
    backgroundColor: 'rgba(24,96,120,1)',
    marginBottom: 30,
    padding: 40,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default styles;
