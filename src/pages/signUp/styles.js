import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  textHeader: {
    paddingVertical: 20,
    color: 'rgba(125,235,235,1)',
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
    marginTop: 20,
  },
  buttonSignUp: {
    borderRadius: 50,
    backgroundColor: 'rgba(24,96,120,1)',
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
    borderColor: 'rgba(125,235,235,1)',
  },
});

export default styles;
