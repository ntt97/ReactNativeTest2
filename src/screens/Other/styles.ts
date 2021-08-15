import { BORDER_COLOR_DEFAULT } from './../../constants/vars';
import { colors } from '@constants/vars';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  inputHeader: {},
  txtInput: {
    color: colors.BLACK,
    fontSize: 20,
  },
  body: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: BORDER_COLOR_DEFAULT,
    padding: 10,
  },
  txtTitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#555',
  },
  btn: {
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    width: '70%',
    backgroundColor: 'rgba(2, 17, 188, 0.1)',
  },
});
