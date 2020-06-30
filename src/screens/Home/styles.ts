import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  content: {
    flex: 0.5,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 0.2,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  digit: {
    fontSize: 50,
    color: '#33f292',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  generateButton: {
    borderRadius: 10,
    backgroundColor: '#33f292',
    padding: 10,
  },
  generateButtonText: {
    fontSize: 24,
    color: '#222624',
    textTransform: 'uppercase',
  },
  showLogText: {
    fontSize: 24,
    color: '#eff9f4',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    flex: 0.3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
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
    fontSize: 24,
  },
});
