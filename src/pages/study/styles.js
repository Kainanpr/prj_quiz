import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce2f2',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#186078',
  },
  cardContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FE474C',
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
  card1: {
    backgroundColor: 'white',
  },
  card2: {
    backgroundColor: 'white',
  },
  label: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'System',
    color: '#989898',
    backgroundColor: 'transparent',
  },
  containerInstruction: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#455358',
    paddingVertical: 10,
  },
  textInstruction: {
    color: 'white',
    marginRight: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationButton: {
    padding: 30,
  },
  paginationText: {
    color: '#989898',
    margin: 30,
  },
});

export default styles;
