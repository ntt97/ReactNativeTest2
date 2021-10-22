import { WIDTH_RATIO } from './../../constants/vars';
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
  headerContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formikContent: {
    width: '100%',
    paddingHorizontal: 20 * WIDTH_RATIO,
  },
  inputStyle: {
    fontSize: 14,
    marginBottom: 15,
  },
  inputContainer: {
    height: 30 * WIDTH_RATIO,
    // width: (WIDTH - 40) * WIDTH_RATIO,
    // marginBottom: 30 * WIDTH_RATIO,
  },
  inputContainerStyle: {
    borderBottomWidth: 0.5,
    height: 35 * WIDTH_RATIO,
  },
  buttonTitle: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  description: {
    fontSize: 14,
    marginLeft: 10,
    color: colors.DARK_GREY,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
});
