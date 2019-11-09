import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: '#dce2f2',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 60,
  },
  containerLogo: {
    alignItems: 'center',
  },
  logo: {
    height: 300,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Sans Serif',
    fontSize: 25,
    color: '#989898',
    letterSpacing: -2,
    textAlign: 'center',
  },
  containerBotton: {
    marginTop: 30,
  },
  button: {
    backgroundColor: '#186078',
    marginBottom: 30,
    padding: 55,
  },
  buttonText: {
    letterSpacing: -1,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
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
