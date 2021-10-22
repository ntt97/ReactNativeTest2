import { WIDTH_RATIO, WIDTH, colors } from '@constants/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  content: {
    alignItems: 'center',
    marginVertical: 30 * WIDTH_RATIO,
  },

  formikContent: {
    width: '100%',
    paddingHorizontal: 20 * WIDTH_RATIO,
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

  buttonContainer: {
    alignItems: 'center',
    backgroundColor: colors.DARK_BLUE,
    width: WIDTH - 50 * WIDTH_RATIO,
    height: 40 * WIDTH_RATIO,
    borderRadius: 20 * WIDTH_RATIO,
    marginTop: 50 * WIDTH_RATIO,
    marginBottom: 15,
  },

  buttonTitle: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  avatar: {
    marginBottom: 30 * WIDTH_RATIO,
    alignSelf: 'center',
  },
});

export default styles;
