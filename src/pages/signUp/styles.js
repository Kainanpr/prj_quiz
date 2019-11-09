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
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  textHeader: {
    paddingVertical: 20,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  fraseHeader: {
    paddingTop: 26,
    color: 'white',
    fontSize: 18,
  },
  input: {
    fontSize: 16,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingLeft: 50,
  },
  differentPasswords: {
    fontSize: 16,
    color: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    paddingLeft: 50,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 15,
  },
  inputContainer: {
  },
  buttonSignUp: {
    borderRadius: 50,
    backgroundColor: '#186078',
    justifyContent: 'center',
    marginTop: 40,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: '#186078',
  },
});

export default styles;
