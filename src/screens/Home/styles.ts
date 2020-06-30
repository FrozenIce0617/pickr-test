import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 0.5,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  footer: {
    flex: 0.3,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  digit: {
    fontSize: 20,
    textAlign: 'center',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    flex: 0.3,
  },
  listContainer: {
    margin: 20,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  listItemText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
});
