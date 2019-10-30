import { StyleSheet } from 'react-native';
import { red } from 'ansi-colors';

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
  // Modal
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  contentModal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    flex: 1,
    marginVertical: 200,
    marginHorizontal: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textSuccess: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#23b26d',
  },
});

export default styles;
