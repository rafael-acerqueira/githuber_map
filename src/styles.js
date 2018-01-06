import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modal: {
    backgroundColor: '#FFF',
    margin: 20,
    padding:20,
    borderRadius: 5
  },
  modalTitle: {
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
  },
  modalButtonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  modalButton: {
    height: 42,
    borderRadius: 5
  },
});

export default styles;
