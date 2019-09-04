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
  buttonText: {
    color: '#989898',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
