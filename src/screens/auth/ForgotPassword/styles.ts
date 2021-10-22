import { HEIGHT, WIDTH, colors, WIDTH_RATIO } from '@constants/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmOTPContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20 * WIDTH_RATIO,
  },
  content: {
    marginTop: WIDTH <= 320 ? HEIGHT * 0.1 : HEIGHT * 0.15,
  },
  inputStyle: {
    fontSize: 14,
    color: colors.WHITE,
    paddingHorizontal: 20 * WIDTH_RATIO,
    marginBottom: 30,
  },
  customInputStyle: {
    width: '100%',
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
  rightIconStyle: {
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 10 * WIDTH_RATIO,
    borderRadius: 22 * WIDTH_RATIO,
    height: 44 * WIDTH_RATIO,
    borderColor: 'rgb(120, 139, 163)',
    borderWidth: 1 * WIDTH_RATIO,
    backgroundColor: 'rgba(55, 80, 106, 0.3)',
  },
  headerTitle: {
    fontSize: 24,
    color: colors.WHITE,
    textAlign: 'center',
    margin: 15,
  },
  description: {
    fontSize: 14,
    color: colors.WHITE,
    margin: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: colors.DARK_BLUE,
    height: 40 * WIDTH_RATIO,
    borderRadius: 20 * WIDTH_RATIO,
    marginTop: 10 * WIDTH_RATIO,
  },
  buttonTitle: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  linkTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  customTouchableBack: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: 20,
    top: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageBack: {
    width: 20,
    height: 20,
    tintColor: colors.WHITE,
  },
});

export default styles;
