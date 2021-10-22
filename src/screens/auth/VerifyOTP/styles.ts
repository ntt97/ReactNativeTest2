import { HEIGHT, WIDTH, colors } from '@constants/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: HEIGHT * 0.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  subContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  companyLogo: {
    width: WIDTH * 0.8,
    height: WIDTH * 0.8 * 0.17,
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 24,
    color: '#515A5F',
    marginBottom: 15,
  },

  contentTitle: {
    width: WIDTH * 0.86,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'flex-end',
  },

  resendCodeContainer: {
    flexDirection: 'row',
    width: WIDTH * 0.86,
    color: '#515A5F',
    marginBottom: 15,
    textAlign: 'right',
  },

  resendCodeText: {
    color: '#515A5F',
    fontSize: 14,
  },

  resendCodeUnderline: {
    marginLeft: 5,
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  inputContainer: {
    marginHorizontal: 15,
    paddingHorizontal: 20,
    borderRadius: 7,
    height: 45,
    borderColor: 'grey',
    borderWidth: 1,
  },

  inputStyle: {
    fontSize: 14,
    margin: 5,
    textAlign: 'center',
  },

  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#469EC7',
    width: WIDTH * 0.8,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 15,
  },

  buttonTitle: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  qrCodeContainer: {
    marginBottom: 15,
  },

  totpUrl: {
    textAlign: 'center',
    fontSize: 14,
    color: '#616161',
    marginHorizontal: 15,
    padding: 8,
    borderColor: '#616161',
    borderWidth: 1.5,
    marginBottom: 20,
  },

  backToLoginContainer: {
    alignItems: 'flex-end',
    width: WIDTH * 0.86,
    marginBottom: 15,
  },

  backToLogin: {
    color: '#515A5F',
  },
});

export default styles;
