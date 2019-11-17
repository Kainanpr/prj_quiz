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
    flex: 1,
    marginLeft: 20,
  },
  // Progress
  containerProgress: {
    marginBottom: 30,
  },
  textProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
