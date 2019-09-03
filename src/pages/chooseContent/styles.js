import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dce2f2',
    flex: 1,
  },
  containerCard: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 0.5,
    marginVertical: 5,
    height: 150,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 100,
  },
  buttonText: {
    color: '#989898',
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue',
  },
  containerButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    padding: 15,
  },
});

export default styles;
