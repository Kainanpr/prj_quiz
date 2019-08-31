import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '40%',
  },
  containerForm: {
    flex: 2,
    padding: 20,
  },
  input: {
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.5)',
    fontSize: 16,
  },
  button: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: 'rgba(24,96,120,0.7)',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  signUpLink: {
    padding: 10,
    marginTop: 20,
  },
  signUpLinkText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
