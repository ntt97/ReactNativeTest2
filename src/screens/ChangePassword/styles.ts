import { colors, WIDTH_RATIO } from '@constants/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtInput: {
    color: colors.BLACK,
    fontSize: 20,
  },

  titleContainer: {
    margin: 16 * WIDTH_RATIO,
  },

  formikContent: {
    width: '100%',
    paddingHorizontal: 20 * WIDTH_RATIO,
  },

  title: {
    fontSize: 16 * WIDTH_RATIO,
    color: colors.BLACK,
  },

  buttonTitle: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },

  inputStyle: {
    fontSize: 14,
  },

  inputContainer: {
    height: 20 * WIDTH_RATIO,
    // width: (WIDTH - 40) * WIDTH_RATIO,
    marginBottom: 30 * WIDTH_RATIO,
  },

  inputContainerStyle: {
    borderBottomWidth: 0.5,
  },
});

export default styles;
