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
  containerAllProgress: {
  },
  containerProgress: {
    marginBottom: 20,
  },
  textProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerCard: {
    marginTop: 40,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerWord: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#f1f1f1',
  },
  doNotKnow: {
    color: '#3ccfcf',
  },
  word: {
    fontSize: 20,
  },
  containerAnswer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    borderBottomWidth: 3,
    borderBottomColor: '#455358',
  },
  button: {
    marginLeft: 30,
    backgroundColor: '#3ccfcf',
    justifyContent: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: 'white',
  },
  textInstruction: {
    marginTop: 5,
    color: '#97a5aa',
    fontWeight: 'bold',
    fontSize: 9,
  },
});

export default styles;
