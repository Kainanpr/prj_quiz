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
});

export default styles;
