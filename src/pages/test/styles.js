import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce2f2',
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    backgroundColor: '#186078',
  },
  stepIndicator: {
    marginVertical: 50,
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#186078',
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
});

export default styles;
