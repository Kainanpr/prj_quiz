import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce2f2',
  },
  content: {
    flex: 1,
    margin: 20,
  },
  header: {
    backgroundColor: '#186078',
  },
  containerPage: {
    flex: 1,
  },
  containerQuestion: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  textQuestion: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  containerOption: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 5,
  },
  textOption: {
    marginLeft: 20,
  },
  // Modal
  containerModal: {
    flex: 1,
    justifyContent:
    'center',
    alignItems: 'center',
  },
  contentModal: {
    backgroundColor: 'white',
    padding: 100,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});

export default styles;
