import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dce2f2',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#186078',
  },
  containerLogo: {
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Sans Serif',
    fontSize: 25,
    color: '#989898',
    letterSpacing: -2,
    textAlign: 'center',
    marginBottom: 30,
  },
  containerButton: {
    flex: 1,
  },
  button: {
    backgroundColor: '#186078',
    height: '100%',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
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
  textError: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ff725b',
  },
});

export default styles;
