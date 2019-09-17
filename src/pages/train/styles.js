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
    marginTop: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    borderBottomWidth: 3,
    borderBottomColor: '#455358',
  },
  button: {
    backgroundColor: '#3ccfcf',
    padding: 20,
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  // Screen doNotKnow
  textCopyAnswer: {
    marginTop: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff725b',
  },
  textQuestionAndAnswer: {
    marginTop: 20,
    color: '#97a5aa',
  },
  containerWordDoNotKnow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#f1f1f1',
  },
  containerAnswerDoNotKnow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Screen correct
  textCorrect: {
    marginTop: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#23b26d',
  },
  // Screen incorrect
  textAnswer: {
    color: '#23b26d',
  },
  textTryAnswer: {
    color: '#ff725b',
  },
});

export default styles;
