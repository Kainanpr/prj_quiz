import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  contentModal: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#23b26d',
  },
  textError: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff725b',
  },
  button: {
    paddingHorizontal: 25,
    marginTop: 30,
  },
  textButton: {
    fontSize: 15,
    color: 'black',
  },
});

export default styles;
