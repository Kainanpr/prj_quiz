import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  containerLogo: {
    marginBottom: 60,
    alignItems: 'center',
  },
  logo: {
    height: 200,
    resizeMode: 'contain',
  },
  containerForm: {
    padding: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 15,
  },
  input: {
    paddingHorizontal: 20,
    paddingLeft: 45,
    marginBottom: 15,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.3)',
    fontSize: 16,
    color: 'white',
  },
  button: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(24,96,120,1)',
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
