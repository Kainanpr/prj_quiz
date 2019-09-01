import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: 'transparent',
  },
  header: {
    backgroundColor: 'rgba(24,96,120,1)',
  },
  content: {
    padding: 20,
  },
  text: {
    paddingVertical: 70,
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
