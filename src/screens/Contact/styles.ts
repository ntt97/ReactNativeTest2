import { colors, FONT_SIZE_DEFAULT, WIDTH, BORDER_COLOR_DEFAULT, WIDTH_RATIO } from '@constants/vars';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputHeader: {
    backgroundColor: '#fff',
    width: WIDTH - 40,
    height: 30,
    marginBottom: 30,
    marginTop: -15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  txtInput: {
    color: colors.DARK_GREY,
    fontSize: FONT_SIZE_DEFAULT,
    marginLeft: 10,
  },
  image: {
    width: WIDTH - 10,
    height: 500,
  },
  body: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  formContainer: {
    backgroundColor: '#e5e5e5',
  },
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: '700',
    color: '#B01F24',
    textTransform: 'uppercase',
  },
  containerTitle: {
    width: '80%',
    paddingVertical: 20,
  },
  boxRow: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: BORDER_COLOR_DEFAULT,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  txtDefault: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    color: '#555',
  },
  box: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: BORDER_COLOR_DEFAULT,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: BORDER_COLOR_DEFAULT,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});
